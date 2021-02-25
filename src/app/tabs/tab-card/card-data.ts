import { CardDataControls } from "./card-data-controls";

export interface CardData {
    name: string;
    controls: CardDataControls[];
    unassigned: CardDataControls[];
}