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
    <svg
      height="50px" // Adjusted to fit the container
      width="50px" // Adjusted to fit the container
      viewBox="0 0 36 36"
    >
      <image
        href="https://ci3.googleusercontent.com/meips/ADKq_NarBczBwpE6ITP2p28G1SckEqG5mMjeOI4uiY9uDK-f5eJtneTBYI8XdXtLBYhN7ypaQNS2tvMW7216W5QUJb0t-JRwuLNgisV4Y-V7VnFOTPibcEhtwMukida3f3vC42Zjdb1DRYig8BbiikLbuWRmDhOjsbcd0NOTQS5PhRyqb9byMbSxx8ylKINPVvKApvoCBPYgE2NFQztj6aAKoCGfiInfyYU=s0-d-e1-ft#https://dynamic.brandcrowd.com/preview/logodraft/a25c4a0c-aacc-4dc6-bf46-a89d1d16b201/image/large.png?bust=46648ea8-dbf2-4dcc-9465-a33bf91cb11f"
        height="36"
        width="36"
        x="0"
        y="0"
        preserveAspectRatio="xMidYMid meet" // Ensures the image is centered
      />
    </svg>
  </div>
);
