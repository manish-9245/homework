# Problem: Create bank account system.

bal=0.0; ch,amt=map(float,input().split()); bal+=amt if ch==1 else -amt; print(f"Balance: {bal}")
