#https://sites.google.com/chromium.org/driver/?pli=1
from selenium import webdriver
from selenium.webdriver.support.select import Select
from selenium.webdriver.common import keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("http://localhost:3000")
print(driver.title)

#Caso de uso: Crear receta de manera exitosa
try:
    #Refrescar la tabla
    time.sleep(1)
    updateTable = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "updateList"))
    )
    updateTable.click()
    time.sleep(1)

    #Seleccionar botón crear receta
    createRecipeButton = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "createRecipe"))
    )
    createRecipeButton.click()

    #Llenar el formulario con informacion válida
    time.sleep(2)
    nameRecipe = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "name"))
    )
    nameRecipe.send_keys("Pan con mantequilla")

    urlImg = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "img"))
    )
    urlImg.send_keys("https://www.lared.cl/wp-content/uploads/2020/10/13131628/panmantequilla860.jpg")

    
    ingredientsRecipe = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "ingredients"))
    )
    ingredientsRecipe.send_keys("Pan\n","Mantequilla")

    stepsRecipe = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "instructions"))
    )
    stepsRecipe.send_keys("Abra el pan\n","Agregue mantequilla")

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
