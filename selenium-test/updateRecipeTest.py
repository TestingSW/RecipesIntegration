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
driver = webdriver.Remote(
    command_executor='https://6ca0-200-104-235-124.sa.ngrok.io/',
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
    updateTable.click()
    time.sleep(1)

    #Seleccionar botón editar de la primera receta de la lista
    updateRecipeButton = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "updateRecipe1"))
    )
    updateRecipeButton.click()
    time.sleep(1)

    #Cambiar partes de la receta 
    time.sleep(2)
    nameRecipe = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "name"))
    )
    nameRecipe.clear()
    nameRecipe.send_keys("Pan con mantequilla y mermelada")

    urlImg = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "img"))
    )
    urlImg.clear()
    urlImg.send_keys("https://www.3nusos.com/uploads/2021/11/tostadas-con-mantequilla-y-mermelada-scaled.jpg")

    
    ingredientsRecipe = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "ingredients"))
    )
    ingredientsRecipe.clear()
    ingredientsRecipe.send_keys(["Pan\n","Mantequilla\n", "mermelada"])

    stepsRecipe = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "instructions"))
    )
    stepsRecipe.clear
    stepsRecipe.send_keys(["Abra el pan\n","Agregue mantequilla\n","Agregue mermelada"])

    #Guardar la receta
    time.sleep(2)
    submitButton = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "submit"))
    )
    submitButton.click() #submitButton.submit()

    #Refrescar la tabla
    time.sleep(1)
    updateTable = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "updateList"))
    )
    updateTable.click()
    time.sleep(1)

except Exception as e:
    print("Error!", e)
    driver.quit()

finally:
    driver.quit()
