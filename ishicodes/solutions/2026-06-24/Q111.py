# Problem: Create ticket booking system.

avail = 50
req = int(input())
print(f"Booked {req}" if req <= avail else "Not available")
