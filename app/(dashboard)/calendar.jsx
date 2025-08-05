import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useThings } from '../../hooks/useThings';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState();
  const { things } = useThings();

  const thingsForSelectedDate = things.filter(
    thing => thing.date_logged && thing.date_logged.slice(0, 10) === selectedDate
  );

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <Calendar
        onDayPress={day => {
          setSelectedDate(day.dateString);
        }}
        markedDates={
          selectedDate
            ? { [selectedDate]: { selected: true, selectedColor: '#00adf5' } }
            : {}
        }
      />
      {selectedDate && (
        <Text style={{ marginTop: 20, textAlign: 'center' }}>
          Selected: {selectedDate}
        </Text>
      )}
      <View style={{ marginTop: 20 }}>
        {thingsForSelectedDate.length === 0 ? (
          <Text style={{ textAlign: 'center' }}>No good things logged for this date.</Text>
        ) : (
          thingsForSelectedDate.map(thing => (
            <View key={thing.$id} style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{thing.title}</Text>
              {thing.notes ? <Text>{thing.notes}</Text> : null}
            </View>
          ))
        )}
      </View>
    </View>
  );
}
