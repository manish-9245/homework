import { NextResponse } from 'next/server';
import { pool } from 'lib/db';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret_key');

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const [rows]: any = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length === 0) return NextResponse.json({ error: 'User not found' }, { status: 401 });
  
  const user = rows[0];
  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  
  const token = await new SignJWT({ userId: user.id, username: user.username })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(JWT_SECRET);

  const response = NextResponse.json({ success: true });
  response.cookies.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 // 24 hours
  });
  
  return response;
}
