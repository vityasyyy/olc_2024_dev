## Before You Make Changes

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
