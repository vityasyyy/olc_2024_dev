## Frontend Setup

Kalo baru pull/clone repo ini, run command ini dulu biar bisa `npm run dev` di browser kalian.

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
