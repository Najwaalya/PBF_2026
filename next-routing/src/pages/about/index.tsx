export default function About() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f2f5",
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#0070f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          fontSize: "32px",
          color: "white",
        }}>
          👤
        </div>

        <h1 style={{ color: "#333", marginBottom: "4px" }}>Halaman About</h1>
        <p style={{ color: "#888", marginBottom: "24px" }}>Profil Mahasiswa</p>

        <div style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "left",
        }}>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#888", fontSize: "12px" }}>NAMA</span>
            <p style={{ margin: "4px 0", fontWeight: "bold", color: "#333" }}>Najwa Alya Nurizzah</p>
          </div>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ color: "#888", fontSize: "12px" }}>NIM</span>
            <p style={{ margin: "4px 0", fontWeight: "bold", color: "#333" }}>2341720230</p>
          </div>
          <div>
            <span style={{ color: "#888", fontSize: "12px" }}>PROGRAM STUDI</span>
            <p style={{ margin: "4px 0", fontWeight: "bold", color: "#333" }}>Teknik Informatika</p>
          </div>
        </div>
      </div>
    </div>
  );
}