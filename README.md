Alur/flow dari project ini adalah sebagai berikut :

1. Alur Saat Register
- Saat melakuakn registrasi aplikasi akan melakukan check apakah email sudah pernah terdaftar
- Jika email pernah terdaftar maka akan menampilkan pesan errro "User Already Exists!"
- Jika tidak pernah terdaftar, maka selanjutnya API akan melakukan cek apakah password dan confirmPassword sesuai
- Jika tidak sesuai maka akan menampilkan pesan error "Password and Confirm Password Not Match"
- Jika password sesuai maka API akan membuatkan document User pada User collection
- Selain itu API akan membuatkan Token document untuk setiap User kegunaannya untuk menyimpan refresh token

2. Alur saat Login
- Saat melakukan Login API akan melakukan pengecekan apakah email sudah terdaftar
- Jika email belum terdaftar maka akan mengembalikan Error
- Jika emial terdaftar tapi password tidak sesuai maka akan menampilkan pesan Error
- Jika email terdaftar maka API akan mengemalikan response berupa access token untuk Authorization
- Selain itu API akan melakukan update pada documen token berdasarkan userId pengguna/user
- Updatennya berupa refresh Token dan akan ada field baru yaitu updatedAt
- Dan refresh token hanya akan di tampilkan pada http only cookie jadi akan menjaga keamana pengguna/user
- Access token akan daluarsa dalam 24 detik
- Refresh token akan dalursa dalam 1 hari


3. Alur saat Logout
- Saat melakukan Logout, API akan melakukan pengecekan apakah refreshToken di cookie ada
- Jika tidak ada, akan mengembalikan pesan error
- Jika refresh token ada, maka document collectiona akan di ambil dari collection Token
- setelah itu lakukan update pada filed refreshToken dengan menset-nya menjadi string kosong ("")

4. Veriy Token
- Kegunaanya adalah untuk memastikan apakah user sudah diberikan untuk menggunakan atau mengakses fitur aplikasi

5. Refresh Token
