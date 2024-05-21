import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({targetDate}) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    } = {days: 0, hours: 0, minutes: 0, seconds: 0};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const {days, hours, minutes, seconds} = timeLeft;

  const SmallCard = ({value, keys}: any) => (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.small_card}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <Text style={styles.label}>{keys}</Text>
    </View>
  );
  return (
    <>
      <View style={{ marginBottom: 10, marginTop: Platform.OS=='android' ? 20 : 50}}>
        <Text style={styles.text}>Countdown to the wedding</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <SmallCard value={days} keys="Days" />
        <SmallCard value={hours} keys="Hours" />
        <SmallCard value={minutes} keys="Minutes" />
        <SmallCard value={seconds} keys="Seconds" />
      </View>
    </>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 25.2,
  },
  label: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 19.6,
    paddingTop: 10
  },
  small_card: {
    height: 60,
    width: 68,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 1
  },
});
