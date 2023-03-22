import { Level, Monster, FrameType, Race } from './types'

export interface CardSet {
    "set_name": string;
    "set_code": string;
    "set_rarity": string;
    "set_rarity_code": string;
    "set_price": string;
}

export interface Card {
    "id": number;
    "name": string;
    "type": Monster;
    "frameType": FrameType;
    "desc": string;
    "atk": number;
    "def": number;
    "level": Level;
    "race": Race;
    "attribute": "LIGHT",
    "card_sets": [
        {
            "set_name": "Code of the Duelist",
            "set_code": "COTD-EN001",
            "set_rarity": "Super Rare",
            "set_rarity_code": "(SR)",
            "set_price": "1.37"
        },
        {
            "set_name": "Star Pack VRAINS",
            "set_code": "SP18-EN003",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "1.17"
        },
        {
            "set_name": "Star Pack VRAINS",
            "set_code": "SP18-EN003",
            "set_rarity": "Starfoil",
            "set_rarity_code": "",
            "set_price": "0"
        },
        {
            "set_name": "Star Pack VRAINS",
            "set_code": "SP18-EN003",
            "set_rarity": "Starfoil Rare",
            "set_rarity_code": "(SFR)",
            "set_price": "1.17"
        },
        {
            "set_name": "Structure Deck: Cyberse Link",
            "set_code": "SDCL-EN009",
            "set_rarity": "Common",
            "set_rarity_code": "(C)",
            "set_price": "1.46"
        }
    ],
    "card_images": [
        {
            "id": 36033786,
            "image_url": "https://images.ygoprodeck.com/images/cards/36033786.jpg",
            "image_url_small": "https://images.ygoprodeck.com/images/cards_small/36033786.jpg",
            "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/36033786.jpg"
        }
    ],
    "card_prices": [
        {
            "cardmarket_price": "0.04",
            "tcgplayer_price": "0.09",
            "ebay_price": "0.99",
            "amazon_price": "1.37",
            "coolstuffinc_price": "0.25"
        }
    ]
}