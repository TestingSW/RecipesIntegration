#https://sites.google.com/chromium.org/driver/?pli=1
from selenium import webdriver
from selenium.webdriver.support.select import Select
from selenium.webdriver.common import keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

#### Remoto
chrome_options = webdriver.ChromeOptions()
chrome_options.set_capability("platformName", "MAC")
driver = webdriver.Remote(
    command_executor='http://192.168.100.168:4444',
    options=chrome_options
)
driver.get("http://localhost:3000")
print(driver.title)
#####


####Local
# PATH = "C:\Program Files (x86)\chromedriver.exe"
# driver = webdriver.Chrome(PATH)
# driver.get("http://localhost:3000")
# print(driver.title)
#####

#Caso de uso: Editar receta de manera exitosa
try:
    #Refrescar la tabla
    time.sleep(1)
    updateTable = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "updateList"))
    )
    recipes = driver.find_elements(By.TAG_NAME, "li")

    foundR = False
    for recipe in recipes {
        if recipe.text == "Pan con mantequilla"
        recipe.click()
        time.sleep(2)
        foundR = True
        break
    }

    if (!foundR) throw "Receta no encontrada" 

except Exception as e:
    print("Error!", e)
    driver.quit()

finally:
    driver.quit()
