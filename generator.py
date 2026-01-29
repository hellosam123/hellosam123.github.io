k = 1
color = None

for i in range(8):
    print("<div class=\"row flexbox-grid flex-row\">")
    for j in range(8):
        if (i + j)%2 == 0:
            color = "light"
        else:
            color = "dark"
        print(f"  <div id=\"{k}\" class=\"column {color}\">\n\n  </div>")
        k += 1
    print("</div>")
