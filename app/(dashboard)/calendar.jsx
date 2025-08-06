import React, { useState } from 'react';
import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useThings } from '../../hooks/useThings';
import ThemedView from '../../components/ThemedView';
import EnchantedText from '../../components/EnchantedText';
import { Colors } from '../../constants/Colors';
import ThemedCard from '../../components/ThemedCard';
import { useColorScheme } from 'react-native';
import { ScrollView } from 'react-native';
import BackgroundWrapper from '../../components/BackgroundWrapper';


export default function CalendarScreen() {



  const [selectedDate, setSelectedDate] = useState();
  const [expandedIds, setExpandedIds] = useState([]);
  const { things } = useThings();

const colorScheme = useColorScheme();
const theme = Colors[colorScheme] ?? Colors.light;

  const thingsForSelectedDate = things.filter(
    thing => thing.date_logged && thing.date_logged.slice(0, 10) === selectedDate
  );

  const toggleExpand = (id) => {
    setExpandedIds(prev =>
      prev.includes(id)
        ? prev.filter(eid => eid !== id)
        : [...prev, id]
    );
  };

  
  return (
    <BackgroundWrapper>


    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 60, paddingTop: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Calendar
        style={{
          //backgroundColor: theme.background,
          borderRadius: 12,
          paddingTop: 35,
          padding: 10,
          shadowColor: theme.title,
          shadowOpacity: 0.06,
          shadowRadius: 5,
          elevation: 3,
        }}
        theme={{
          calendarBackground: theme.background,
          todayTextColor: theme.title,
          selectedDayBackgroundColor: theme.title,
          selectedDayTextColor: theme.background,
          monthTextColor: theme.title,
          textSectionTitleColor: theme.title,
          dayTextColor: theme.text,
          textDisabledColor: theme.iconColor,
          arrowColor: theme.title,
          textDayFontWeight: '400',
          textDayFontSize: 16,
          textDayHeaderFontWeight: 'bold',
          textDayHeaderFontSize: 14,
          textMonthFontWeight: 'bold',
          textMonthFontSize: 18,
        }}
        onDayPress={day => setSelectedDate(day.dateString)}
        markedDates={
          selectedDate
            ? { [selectedDate]: { selected: true, selectedColor: theme.title } }
            : {}
        }
      />
  
      {selectedDate && (
        <EnchantedText style={{
          marginTop: 20,
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
          Date: {selectedDate}
        </EnchantedText>
      )}
  
      <EnchantedText style={{
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
      }}>
        Good things you did:
      </EnchantedText>
  
      {thingsForSelectedDate.length === 0 ? (
        <EnchantedText style={{ textAlign: 'center', marginBottom: 12 }}>
          No good things logged for this date.
        </EnchantedText>
      ) : (
        thingsForSelectedDate.map(item => (
          <Pressable key={item.$id} onPress={() => toggleExpand(item.$id)}>
            <ThemedCard style={styles.card}>
              <EnchantedText style={styles.title}>{item.title}</EnchantedText>
              {expandedIds.includes(item.$id) && item.notes ? (
                <EnchantedText style={styles.notes}>{item.notes}</EnchantedText>
              ) : null}
            </ThemedCard>
          </Pressable>
        ))
      )}
    </ScrollView>
    </BackgroundWrapper>
  );
  
}

const styles = StyleSheet.create({
  card: {
    width: "93%",
    marginHorizontal: "3%",
    marginVertical: 10,
    padding: 14,

    borderRadius: 14,
    shadowOpacity: 0.20,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
  notes: {
    marginTop: 8,
    fontSize: 16,
  }
});
