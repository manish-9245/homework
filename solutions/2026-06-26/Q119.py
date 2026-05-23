# Problem: Create mini employee management system.

emps = {}
cmd, name, id = input().split()
emps[id] = name if cmd == "add" else emps.pop(id, None)
print(emps)
