import sys

try:
    from PIL import Image
    img = Image.open(sys.argv[1])
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    # Using a soft threshold for white background removal
    for item in datas:
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(sys.argv[2], "PNG")
    print("Background removed successfully.")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
