# Problem: Create mini library system.

books=[]; c,b=input().split(); books.append(b) if c=='1' else books.remove(b) if c=='2' and b in books else None; print(books)
