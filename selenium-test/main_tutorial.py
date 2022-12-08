#https://sites.google.com/chromium.org/driver/?pli=1
from selenium import webdriver
from selenium.webdriver.common import keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("https://www.techwithtim.net/")#"http://localhost:3000"
print(driver.title)

search =  driver.find_element("name","s")
search.send_keys("test")
search.submit()

#print(driver.page_source)

try:
    main = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "main"))
    )

    articles = main.find_element((By.TAG_NAME, "article"))
    for article in articles:
        header = article.find_element((By.CLASS_NAME, "entry-summary"))
        print(header.text)

finally:
    driver.quit()

