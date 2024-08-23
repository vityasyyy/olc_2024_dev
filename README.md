## Before You Make Changes

PLEASE jangan lupa **PULL** sebelum bikin perubahan apapun, dan jangan lupa saling kabarin lagi kerjain bagian apa :)

```
git pull --rebase origin main
```
FOR A CLEANER COMMIT HISTORY PLS
## Frontend Setup

> [!TIP]
> Kalo baru pull/clone repo ini, run command ini dulu biar bisa `npm run dev` di browser kalian.

```bash
cd frontend
npm i
```

## Commit Message Convention

```
[<TYPE>](optional scope): <description>
```

`<TYPE>` : 
  - `FEAT`: menambahkan/menghapus fitur
  - `FIX`: memperbaiki bug
  - `BUILD`: menambahkan dependencies
  - `CHORE`: commit misc e.g. mengubah `.gitignore`

`<description>`:
  - penjelasan singkat tentang perubahan apa yang kalian buat
  - bagian **wajib** dari format ini
  - jangan pakai huruf _kapital_ buat huruf pertama
  - jangan pakai `.` di akhir kalimat

### Contoh: 

* ```
  [FEAT](landing Page): menambahkan hero section
  ```
* ```
  [FIX](api): kalkulasi salah
  ```
* ```
  [BUILD]: menambahkan dependencies
  ```

### References:

[conventional-commit-messages](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
