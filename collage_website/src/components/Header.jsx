export default function Header() {
  return (
    <div style={{
      background: "#0d2b6e",
      color: "#fff",
      padding: "15px 20px",
      fontWeight: "bold",
      fontSize: "18px",

    }}>
      <img
        src="https://imgs.search.brave.com/rujKkNseW6WiInl31p-5vb_IFkyAEydQNuVVgfcJ2s0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/amFncmFuam9zaC5j/b20vaW1hZ2VzLzIw/MjUvTWFyY2gvODMy/MDI1LzElMjAyOTk2/OSUyMFZpZHlhdmFy/ZGhpbmkncyUyMENv/bGxlZ2UlMjBvZiUy/MEVuZ2luZWVyaW5n/JTIwYW5kJTIwVGVj/aG5vbG9neSwlMjBW/YXNhaS5qcGVn"
        alt=""
        style={{
          height: "45px",
          width: "45px",
          alignItems: "center",   // ✅ vertical center

          objectFit: "cover"
        }}
      />
        VCET ERP
    </div>
  );
}