# Get max key or max value from a Dict object

E.g. `a_dict = {1:2,2:3,3:1}`

Verbose way:

```PYTHON
maxKey = -float('inf')
maxVal = (-float('inf'), None)
for key,value in a_dict.items():
    if key > maxKey:
        maxKey = key

    if value > maxVal[0]:
        maxVal = (value,key)
```

Concise way:

```PYTHON
maxKey = max(a_dict)
keyWithMaxVal = max(a_dict, key=lambda item:a_dict[item])
```