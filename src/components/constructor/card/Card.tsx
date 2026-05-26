import React from "react";
import Media from "../image/Media";
import styles from "./Card.module.scss";
import {StaticImageData} from "next/image";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";

interface CardProps {
    image: StaticImageData;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, buttonLink }) => (
    <div className={styles.card}>
        <div className={styles.imageWrapper}>
            <Media src={image} type="image" width="100%" height="260px" alt={title} objectFit="cover" />
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {buttonText && buttonLink && (
                <Link href={buttonLink} className={styles.buttonWrapper}>
                    <ButtonUI color="linkHover" hoverColor="linkHover" type="button" sx={{ width: "100%"}}>
                        {buttonText}
                    </ButtonUI>
                </Link>
            )}
        </div>
    </div>
);

export default Card;
