import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main>
      <Navbar />

      <div style={{ padding: "20px" }}>
        {children}
      </div>

      <footer
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#f2f2f2",
          textAlign: "center",
        }}
      >
        <p>© 2026 My Website</p>
      </footer>
    </main>
  );
};

export default AppShell;