import React, {JSX} from 'react';
import styles from './Text.module.scss';
import clsx from 'clsx';
import {
    MdCheckCircle, MdStars, MdQrCode, MdPerson, MdPointOfSale, MdHome, MdHelp, MdInfo, MdLock, MdEmail,
    MdFavorite, MdSearch, MdSettings, MdShoppingCart, MdThumbUp, MdWarning, MdWork, MdVisibility,
    MdAccountBalance, MdAlarm, MdAndroid, MdAttachMoney, MdBackup, MdBook, MdBuild, MdCamera,
    MdCloud, MdCode, MdDirectionsCar, MdEvent, MdFace, MdFlight, MdGrade, MdLanguage, MdPets, MdPhone,
    MdPrint, MdSchool, MdSecurity, MdSend, MdStar, MdStore, MdTrendingUp, MdWifi, MdZoomIn, MdZoomOut,
    MdAccessTime, MdAddShoppingCart, MdAirplanemodeActive, MdBeachAccess, MdBrightnessHigh, MdBusiness,
    MdDirectionsBike, MdDirectionsBus, MdDirectionsRun, MdDirectionsWalk, MdEdit, MdExtension,
    MdFavoriteBorder, MdFingerprint, MdFlag, MdGames, MdGroup, MdHeadset, MdHotel, MdKeyboard, MdLabel,
    MdLocalCafe, MdLocalDining, MdLocalDrink, MdLocalFlorist, MdLocalGasStation, MdLocalHospital,
    MdLocalLibrary, MdLocalMall, MdLocalMovies, MdLocalOffer, MdLocalParking, MdLocalPharmacy,
    MdLocalPhone, MdLocalPizza, MdLocalPlay, MdLocalPostOffice, MdLocalPrintshop, MdLocalSee,
    MdLocalShipping, MdLocalTaxi, MdMap, MdMemory, MdMoneyOff, MdMood, MdMovie, MdMusicNote,
    MdNature, MdPalette, MdPanTool, MdPeople, MdPersonAdd, MdPhoto, MdPhotoCamera, MdPieChart, MdPlace,
    MdPublic, MdReceipt, MdRestaurant, MdRoom, MdShoppingBasket, MdSpa, MdSpeaker, MdStoreMallDirectory,
    MdTerrain, MdTheaters, MdTraffic, MdTrain, MdTram, MdTrendingDown, MdTrendingFlat, MdTurnedIn,
    MdVerifiedUser, MdViewList, MdVisibilityOff, MdWatch, MdWeekend, MdWhatshot, MdWorkOutline
} from 'react-icons/md';
import ButtonUI from '@/components/ui/button/ButtonUI';

export const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
    checkCircle: MdCheckCircle,
    star: MdStars,
    qr: MdQrCode,
    user: MdPerson,
    point: MdPointOfSale,
    home: MdHome,
    help: MdHelp,
    info: MdInfo,
    lock: MdLock,
    email: MdEmail,
    favorite: MdFavorite,
    search: MdSearch,
    settings: MdSettings,
    cart: MdShoppingCart,
    thumb: MdThumbUp,
    warning: MdWarning,
    work: MdWork,
    visible: MdVisibility,
    balance: MdAccountBalance,
    alarm: MdAlarm,
    android: MdAndroid,
    money: MdAttachMoney,
    backup: MdBackup,
    book: MdBook,
    build: MdBuild,
    camera: MdCamera,
    cloud: MdCloud,
    code: MdCode,
    car: MdDirectionsCar,
    event: MdEvent,
    face: MdFace,
    flight: MdFlight,
    grade: MdGrade,
    language: MdLanguage,
    pets: MdPets,
    phone: MdPhone,
    print: MdPrint,
    school: MdSchool,
    security: MdSecurity,
    send: MdSend,
    star2: MdStar,
    store: MdStore,
    trending: MdTrendingUp,
    wifi: MdWifi,
    zoomin: MdZoomIn,
    zoomout: MdZoomOut,
    time: MdAccessTime,
    addcart: MdAddShoppingCart,
    airplane: MdAirplanemodeActive,
    beach: MdBeachAccess,
    bright: MdBrightnessHigh,
    business: MdBusiness,
    bike: MdDirectionsBike,
    bus: MdDirectionsBus,
    run: MdDirectionsRun,
    walk: MdDirectionsWalk,
    edit: MdEdit,
    extension: MdExtension,
    favoriteborder: MdFavoriteBorder,
    fingerprint: MdFingerprint,
    flag: MdFlag,
    games: MdGames,
    group: MdGroup,
    headset: MdHeadset,
    hotel: MdHotel,
    keyboard: MdKeyboard,
    label: MdLabel,
    cafe: MdLocalCafe,
    dining: MdLocalDining,
    drink: MdLocalDrink,
    florist: MdLocalFlorist,
    gas: MdLocalGasStation,
    hospital: MdLocalHospital,
    library: MdLocalLibrary,
    mall: MdLocalMall,
    movies: MdLocalMovies,
    offer: MdLocalOffer,
    parking: MdLocalParking,
    pharmacy: MdLocalPharmacy,
    phone2: MdLocalPhone,
    pizza: MdLocalPizza,
    play: MdLocalPlay,
    post: MdLocalPostOffice,
    printshop: MdLocalPrintshop,
    see: MdLocalSee,
    shipping: MdLocalShipping,
    taxi: MdLocalTaxi,
    map: MdMap,
    memory: MdMemory,
    moneyoff: MdMoneyOff,
    mood: MdMood,
    movie: MdMovie,
    music: MdMusicNote,
    nature: MdNature,
    palette: MdPalette,
    pan: MdPanTool,
    people: MdPeople,
    personadd: MdPersonAdd,
    photo: MdPhoto,
    camera2: MdPhotoCamera,
    pie: MdPieChart,
    place: MdPlace,
    public: MdPublic,
    receipt: MdReceipt,
    restaurant: MdRestaurant,
    room: MdRoom,
    basket: MdShoppingBasket,
    spa: MdSpa,
    speaker: MdSpeaker,
    directory: MdStoreMallDirectory,
    terrain: MdTerrain,
    theaters: MdTheaters,
    traffic: MdTraffic,
    train: MdTrain,
    tram: MdTram,
    trendingdown: MdTrendingDown,
    trendingflat: MdTrendingFlat,
    turnedin: MdTurnedIn,
    verified: MdVerifiedUser,
    viewlist: MdViewList,
    visibilityoff: MdVisibilityOff,
    watch: MdWatch,
    weekend: MdWeekend,
    whatshot: MdWhatshot,
    workoutline: MdWorkOutline,
};

export interface TextButton {
    text: string;
    link: string;
    color?: "primary" | "secondary" | "tertiary";
}

export interface TextProps {
    title?: string;
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    description?: string;
    bullets?: string[];
    descriptionWithBullets?: string[];
    centerTitle?: boolean;
    centerDescription?: boolean;
    centerBullets?: boolean;
    iconName?: keyof typeof ICON_MAP;
    iconColor?: string;
    iconBg?: string;
    iconSize?: number;
    iconAlign?: "left" | "center" | "right";
    buttons?: TextButton[];
    id?: string;
}

const Text: React.FC<TextProps> = ({
                                       title,
                                       titleLevel = 2,
                                       description,
                                       bullets,
                                       descriptionWithBullets,
                                       centerTitle = false,
                                       centerDescription = false,
                                       centerBullets = false,
                                       buttons = [],
                                       id,
                                   }) => {
    const headingTag = `h${titleLevel}` as keyof JSX.IntrinsicElements;

    return (
        <div className={styles.textBlock} id={id}>
            {title &&
                React.createElement(
                    headingTag,
                    {
                        className: clsx(styles.title, centerTitle && styles.center)
                    },
                    title
                )}
            {description && (
                <p className={clsx(styles.description, centerDescription && styles.center)}>
                    {description}
                </p>
            )}
            {Array.isArray(bullets) && bullets.length > 0 && (
                <ul className={clsx(styles.bulletList, centerBullets && styles.center)}>
                    {bullets.map((item, idx) => (
                        <li key={idx} className={styles.bulletItem}>
                            <MdCheckCircle className={styles.bulletIcon} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            {Array.isArray(descriptionWithBullets) && descriptionWithBullets.length > 0 && (
                <div className={styles.descriptionWithBullets}>
                    <p className={clsx(styles.description, centerDescription && styles.center)}>Опис:</p>
                    <ul className={clsx(styles.bulletList, centerBullets && styles.center)}>
                        {descriptionWithBullets.map((item, idx) => (
                            <li key={idx} className={styles.bulletItem}>
                                <MdCheckCircle className={styles.bulletIcon} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {buttons.length > 0 && (
                <div className={styles.buttonGroup}>
                    {buttons.slice(0, 3).map((btn, idx) => (
                        <ButtonUI
                            key={idx}
                            color={btn.color || "primary"}
                            variant={(btn.color === "secondary" ? "outlined" : "solid")}
                            sx={{
                                borderRadius: "6px",
                                padding: "10px 24px",
                                margin: "8px",
                                width: "100%",
                                fontWeight: 600,
                                fontSize: "16px",
                                textTransform: "none",
                            }}
                            href={btn.link}
                            component="a"
                        >
                            {btn.text}
                        </ButtonUI>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Text;
