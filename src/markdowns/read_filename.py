import os

dayFiles = []
for fileN in os.listdir():
    if fileN[:3] == "Day" and fileN[-3:] == ".md":
        splitFileN = fileN.split("_")
        dayFiles.append(splitFileN)

jsx = ""
dayFiles.sort(key=lambda f: int(f[0][3:]), reverse=True)
for fileN in dayFiles:
    li = (
        f"<li><span>dd mmm yyyy</span>"
        + '{" >> "}<NavLink to="/notes/'
        + f'{"_".join(fileN)[:-3]}'
    )
    fileN = [substr.capitalize() for substr in fileN]
    day = fileN[0][3:]
    title = " ".join(fileN[1:])[:-3]
    li += '">Day ' + f"{day}" + f" - {title}" + "</NavLink></li>"

    jsx += li

print(jsx)
