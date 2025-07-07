from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import pandas as pd
import time

def scrape_360_trends():
    # 配置 Chrome 选项
    chrome_options = Options()
    chrome_options.add_argument('--ignore-certificate-errors')  # 忽略证书错误
    chrome_options.add_argument('--ignore-ssl-errors')  # 忽略 SSL 错误
    
    # 创建 Chrome 浏览器实例
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        # 直接访问 360 趋势网站
        driver.get('https://trends.so.com/search?q=数字博物馆')
        
        # 等待页面加载
        time.sleep(5)
        
        # 获取趋势数据
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        trend_data = []
        
        # 提取趋势数据
        trend_items = soup.select('.trend-item, .data-item, .chart-item')  # 根据实际类名调整
        
        for item in trend_items:
            try:
                time_element = item.select_one('.time, .date')
                value_element = item.select_one('.value, .count')
                
                if time_element and value_element:
                    trend_data.append({
                        '时间': time_element.text.strip(),
                        '数值': value_element.text.strip()
                    })
            except Exception as e:
                print(f"提取数据项时出错：{str(e)}")
        
        # 将数据保存到 Excel 文件
        if trend_data:
            df = pd.DataFrame(trend_data)
            df.to_excel('数字博物馆趋势数据.xlsx', index=False)
            print("数据已保存到 Excel 文件")
        else:
            print("未找到趋势数据")
            
    except Exception as e:
        print(f"发生错误：{str(e)}")
    finally:
        driver.quit()

if __name__ == '__main__':
    scrape_360_trends()