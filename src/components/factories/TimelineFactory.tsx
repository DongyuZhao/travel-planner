import * as React from 'react';

import { IFlightInfo, IGroundTransportInfo, IPlaceInfo, ITimeline, ITimelineSection, ITransferInfo } from '../../shared/Interfaces';
import { FlightInfoModel, GroundTransportInfoModel, PlaceInfoModel, TimelineSectionModel, TransferInfoModel } from '../../shared/Models';
import { TimelineIcon } from '../basic/TimelineIcon';
import { TimelineItem } from '../basic/TimelineItem';
import { TimelineSection } from '../basic/TimelineSection';
import { FlightInfoCard } from '../cards/FlightInfoCard';
import { GroundTransportCard } from '../cards/GroundTransportCard';
import { PlaceInfoCard } from '../cards/PlaceInfoCard';
import { TransferCard } from '../cards/TransferInfoCard';
import { BoatIcon } from '../icons/BoatIcon';
import { BusIcon } from '../icons/BusIcon';
import { CameraIcon } from '../icons/CameraIcon';
import { FlightIcon } from '../icons/FlightIcon';
import { HotelIcon } from '../icons/HotelIcon';
import { MetroIcon } from '../icons/MetroIcon';
import { RestaurantIcon } from '../icons/RestaurantIcon';
import { TrainIcon } from '../icons/TrainIcon';
import { TramIcon } from '../icons/TramIcon';
import { TransferIcon } from '../icons/TransferIcon';

export class TimelineFactory {
    public static createTimeline(json: ITimeline) {
        if (json.sections) {
            return json.sections.map((sec, index) => this.createSection(TimelineSectionModel.create(sec), index));
        }
        return [];
    }

    public static createSection(section: ITimelineSection, index: number) {
        if (section && section.type && section.card) {
            const type = this.getSectionType(section.type);
            return (
                <TimelineSection type={type} key={index}>
                    <TimelineItem type={type}>
                        <TimelineIcon type={type}>
                            {this.createIcon(section.type)}
                        </TimelineIcon>
                        {this.createCard(section.card)}
                    </TimelineItem>
                </TimelineSection>
            );
        }
        return null;
    }

    public static createCard(card: IGroundTransportInfo | IFlightInfo | ITransferInfo | IPlaceInfo) {
        if (card) {
            switch (card.cardType) {
                case 'FlightInfo':
                    return (
                        <FlightInfoCard {...FlightInfoModel.create(card)} />
                    );
                case 'GroundTransportInfo':
                    return (
                        <GroundTransportCard {...GroundTransportInfoModel.create(card)} />
                    );
                case 'PlaceInfo':
                    return (
                        <PlaceInfoCard {...PlaceInfoModel.create(card)} />
                    );
                case 'TransferInfo':
                    return (
                        <TransferCard {...TransferInfoModel.create(card)} />
                    );
                default:
                    return undefined;
            }
        }
        return undefined;
    }

    public static createIcon(type:
        'Boat' | 'Bus' | 'Camera' | 'Flight' | 'Hotel' | 'Metro' | 'Restaurant' | 'Train' | 'Tram' | 'Transfer') {
        switch (type) {
            case 'Boat':
                return (
                    <BoatIcon />
                );
            case 'Bus':
                return (
                    <BusIcon />
                );
            case 'Camera':
                return (
                    <CameraIcon />
                );
            case 'Flight':
                return (
                    <FlightIcon />
                );
            case 'Hotel':
                return (
                    <HotelIcon />
                );
            case 'Metro':
                return (
                    <MetroIcon />
                );
            case 'Restaurant':
                return (
                    <RestaurantIcon />
                );
            case 'Train':
                return (
                    <TrainIcon />
                );
            case 'Tram':
                return (
                    <TramIcon />
                );
            case 'Transfer':
                return (
                    <TransferIcon />
                );
            default:
                return undefined;
        }
    }

    public static getSectionType(type:
        'Boat' | 'Bus' | 'Camera' | 'Flight' | 'Hotel' | 'Metro' | 'Restaurant' | 'Train' | 'Tram' | 'Transfer') {
            switch (type) {
                case 'Boat':
                    return 'commute';
                case 'Bus':
                    return 'commute';
                case 'Camera':
                    return 'place';
                case 'Flight':
                    return 'commute';
                case 'Hotel':
                    return 'place';
                case 'Metro':
                    return 'commute';
                case 'Restaurant':
                    return 'place';
                case 'Train':
                    return 'commute';
                case 'Tram':
                    return 'commute';
                case 'Transfer':
                    return 'commute';
                default:
                    return undefined;
            }
    }
}
