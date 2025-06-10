import requests
from bs4 import BeautifulSoup

url="https://www.xbmu.edu.cn/"
r=requests.get(url)
r.endcoding=r.apparent_encoding
r.encoding="utf-8"
#print(r.text)
x=r.text
soup=BeautifulSoup(x,"html.parser")
print("------------------------------------")
#print(soup.prettify())
print(soup.find_all("li",class_="sub-item i1-1"))