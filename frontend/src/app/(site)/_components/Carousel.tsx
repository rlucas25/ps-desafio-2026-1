"use client"
import { useEffect, useMemo, useState } from "react"
import styles from "./carousel.module.css"

const IMAGES = [
  "assets/img/carousel/1.jpg",
  "assets/img/carousel/2.jpg",
  "assets/img/carousel/3.jpg",
  "assets/img/carousel/4.jpg",
  "assets/img/carousel/5.jpg",
]

const TOTAL_TIME = 5500
const PROGRESS_STEP_MS = 50

export default function CollectionsCarousel() {
  const [cards, setCards] = useState([
    { key: 0, image: IMAGES[0], slot: "top" },
    { key: 1, image: IMAGES[1], slot: "middle" },
    { key: 2, image: IMAGES[2], slot: "bottom" },
  ])

  const [nextImageIndex, setNextImageIndex] = useState(3)
  const [progress, setProgress] = useState(0)

  const progressPerTick = useMemo(() => {
    return 100 / (TOTAL_TIME / PROGRESS_STEP_MS)
  }, [])

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + progressPerTick
        return next > 100 ? 100 : next
      })
    }, PROGRESS_STEP_MS)

    return () => clearInterval(progressTimer)
  }, [progressPerTick])

  useEffect(() => {
    const slideTimer = setInterval(() => {
      goNext()
    }, TOTAL_TIME)

    return () => clearInterval(slideTimer)
  }, [nextImageIndex, cards])

  function goNext() {
    setCards((prev) => {
      const topCard = prev.find((card) => card.slot === "top")
      const middleCard = prev.find((card) => card.slot === "middle")
      const bottomCard = prev.find((card) => card.slot === "bottom")

      const exitingCard = bottomCard
        ? { ...bottomCard, slot: "exit", key: `${bottomCard.key}-exit` }
        : null

      const newTopCard = {
        key: Date.now(),
        image: IMAGES[nextImageIndex % IMAGES.length],
        slot: "top",
      }

      const nextCards = [
        { ...topCard, slot: "middle" },
        { ...middleCard, slot: "bottom" },
        newTopCard,
      ]

      if (exitingCard) {
        nextCards.push(exitingCard)
      }

      return nextCards
    })

    setNextImageIndex((prev) => (prev + 1) % IMAGES.length)
    setProgress(0)

    setTimeout(() => {
      setCards((prev) => prev.filter((card) => card.slot !== "exit"))
    }, 1200)
  }

  return (
    <section className={styles.collections}>
      <div className={styles.collections__bg} />

      {cards.map((card) => (
        <div
          key={card.key}
          className={`${styles["carousel-card"]} ${styles[`carousel-card--${card.slot}`]}`}
        >
          <img
            src={card.image}
            alt=""
            className={styles["carousel-card__image"]}
            draggable="false"
          />
        </div>
      ))}

      <div className={styles["carousel-player"]}>
        <div className={styles["carousel-player__bar"]}>
          <div
            className={styles["carousel-player__fill"]}
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          className={styles["carousel-player__button"]}
          onClick={goNext}
          aria-label="Próxima imagem"
        >
          ▶
        </button>
      </div>
    </section>
  )
}