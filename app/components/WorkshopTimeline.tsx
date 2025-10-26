'use client';

import { FC } from 'react';
import { TIMELINE_EVENTS } from '../constants/workshop';
import { TimelineEvent } from '../types';

export const WorkshopTimeline: FC = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 md:px-8">
      <DesktopTimeline events={TIMELINE_EVENTS} />
      <MobileTimeline events={TIMELINE_EVENTS} />
    </div>
  );
};

const DesktopTimeline: FC<{ events: readonly TimelineEvent[] }> = ({ events }) => (
  <div className="hidden sm:block">
    <div className="relative h-28 sm:h-32 -mx-4 sm:-mx-8">
      <div className="absolute top-14 sm:top-16 left-0 w-full h-0.5 sm:h-1 bg-gray-300" />
      
      <div className="absolute top-0 left-4 sm:left-8 right-4 sm:right-8">
        <div className="flex justify-between">
          {events.map((event, index) => (
            <TimelineContent key={index} event={event} totalEvents={events.length} />
          ))}
        </div>
      </div>
      
      <div className="absolute top-14 sm:top-16 left-4 sm:left-8 right-4 sm:right-8">
        <div className="flex justify-between">
          {events.map((event, index) => (
            <TimelineDot key={index} event={event} totalEvents={events.length} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MobileTimeline: FC<{ events: readonly TimelineEvent[] }> = ({ events }) => (
  <div className="sm:hidden mt-6 relative px-4">
    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2" />
    
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="relative flex items-center">
          <div className="flex-1 text-right pr-6">
            <h3 className="text-sm font-bold text-black mb-1">
              {event.title}
            </h3>
            <p className="text-xs font-semibold text-black mb-0.5">
              {event.date}
            </p>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-black rounded-full border-2 border-white shadow-lg">
              <span className="sr-only">{event.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TimelineContent: FC<{ event: TimelineEvent; totalEvents: number }> = ({ event, totalEvents }) => (
  <div className="flex flex-col items-center" style={{ width: `${100 / totalEvents}%` }}>
    <div className="text-center mb-3 sm:mb-4 px-1">
      <h3 className="text-xs sm:text-sm font-bold text-red-500 mb-1">
        {event.title}
      </h3>
      <p className="text-xs font-semibold text-black mb-0.5 sm:mb-1">
        {event.date}
      </p>
    </div>
  </div>
);

const TimelineDot: FC<{ event: TimelineEvent; totalEvents: number }> = ({ event, totalEvents }) => (
  <div className="flex justify-center" style={{ width: `${100 / totalEvents}%` }}>
    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full border-2 sm:border-4 border-white shadow-lg transform -translate-y-1 sm:-translate-y-1.5">
      <span className="sr-only">{event.title}</span>
    </div>
  </div>
);
