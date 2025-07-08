"""
Created on Tue Jun 10 15:48:23 2025

@author: Administrator
"""
import requests
from bs4 import BeautifulSoup
import csv # 导入csv模块

print("我要爬虫西北民族大学，请期待我的表演！")
url="https://www.xbmu.edu.cn/"
#print(url)
r=requests.get(url)
r.encoding="utf-8"
#抓取url地址中的内容
#print(r.text)
x=r.text
soup=BeautifulSoup(x,"html.parser")

# 创建一个列表来存储抓取到的数据
scraped_data = []

#print(soup.find_all("li",class_="sub-item i1-1"))
for i in soup.find_all("li",class_="sub-item i1-1"):
    item_text = i.find_all("a")[0].text
    print(item_text)
    scraped_data.append([item_text]) # 将每个抓取到的文本作为一个列表元素添加到scraped_data中

# 定义CSV文件的路径和名称
csv_file_path = 'c:\\Users\\lxyso\\Desktop\\大二下\\Web前端技术\\scraped_data.csv'

# 将数据写入CSV文件
with open(csv_file_path, mode='w', newline='', encoding='utf-8-sig') as file: # 使用utf-8-sig确保中文正确显示
    writer = csv.writer(file)
    writer.writerow(['菜单项']) # 写入表头
    writer.writerows(scraped_data) # 写入所有抓取到的数据

print(f"数据已保存到 {csv_file_path}")
print("程序执行完毕，哈哈哈！！！")

a