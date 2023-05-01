import { useState } from "react";

import styles from "./App.module.css";

const images = [
  "/ruby-pics/1.webp",
  "/ruby-pics/2.webp",
  "/ruby-pics/3.webp",
  "/ruby-pics/4.webp",
  "/ruby-pics/5.webp",
];

const App = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          width={280}
          height={280}
          alt={`Image ${index}`}
          onClick={() => setSelectedImageIndex(index)}
          className={`${styles.image} ${
            index === selectedImageIndex ? styles.selected : ""
          }`}
          style={{
            transform:
              index === selectedImageIndex
                ? ""
                : `translateX(${
                    (index - selectedImageIndex) * 100
                  }%) translateX(-50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default App;
