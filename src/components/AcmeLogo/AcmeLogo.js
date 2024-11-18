import Image from 'next/image';

export const AcmeLogo = () => (
  <div
    style={{
      width: "50px", // Adjust container size
      height: "50px", // Adjust container size
      borderRadius: "50%", // Makes the border rounded
      overflow: "hidden", // Ensures the image fits inside the rounded container
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #ccc", // Optional: Adds a border
    }}
  >
    <Image
      src="/image/logo.jpg" // Path relative to the public folder
      alt="Acme Logo"
      width={100}
      height={100}
      style={{
        objectFit: "cover", // Ensures the image covers the container
      }}
    />
  </div>
);
