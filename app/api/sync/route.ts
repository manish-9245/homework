import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST() {
  try {
    // Run the sync-solutions script defined in package.json
    // Or just run the commands directly
    await execPromise('mkdir -p solutions && cp -r ../solutions/* ./solutions/');
    return NextResponse.json({ success: true, message: 'Solutions synced successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}