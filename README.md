## Before You Make Changes OI OI OI BAKAAA

PLEASE jangan lupa **PULL** sebelum bikin perubahan apapun, dan jangan lupa saling kabarin lagi kerjain bagian apa :)

```
git pull --rebase origin main
```
FOR A CLEANER COMMIT HISTORY PLS
## Frontend Setup

> [!TIP]
> Kalo baru pull/clone repo ini, run command ini dulu buat install semua dependencies

```bash
cd frontend
npm i
```

### Component Folder Structure

![image](https://github.com/user-attachments/assets/529231c0-94dc-436d-bc04-e1b331794343)

* kalo component nya di banyak page (reusable): `components > global > ReusableComponent.jsx`
* kalo component nya hanya di page itu: `components > nama-halaman > YourComponent.jsx`

biar rapih hehe

## Commit Message Convention

```
<TYPE>[optional scope]: <description>
```

`<TYPE>` : 
  - `feat`: menambahkan/menghapus fitur
  - `fix`: memperbaiki bug
  - `build`: menambahkan dependencies
  - `chore`: commit misc e.g. mengubah `.gitignore`

`<description>`:
  - penjelasan singkat tentang perubahan apa yang kalian buat
  - bagian **wajib** dari format ini
  - jangan pakai huruf _kapital_ buat huruf pertama
  - jangan pakai `.` di akhir kalimat

### Contoh: 

* ```
  feat[landing Page]: menambahkan hero section
  ```
* ```
  feat[api]: kalkulasi salah
  ```
* ```
  build: menambahkan dependencies
  ```

### References:

[conventional-commit-messages](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)


## BACKEND 
Guys don't forget to install and configure mongodb in ur device ya. Also, you have to paste in the .env file also from our what'sapp group, paste .env backend ke directory backend, dan paste .env frontend ke directory frontend habis itu nyalain backend pake ```npm start```,
jangan lupa ``` npm install ``` di directory backend buat download dependencies nya dulu.

baru bisa nyalain websitenya di local. Thanks!! kalo ada problem tolong chat di group wasaf
