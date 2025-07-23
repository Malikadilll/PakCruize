import React from 'react';
import { View, Text,  StyleSheet,} from 'react-native';



const announcements = [
  {
    id: 'a1',
    title: 'New Cars Added!',
    body: 'We’ve just added 20+ new listings to our platform.',
  },
  {
    id: 'a2',
    title: 'App Update',
    body: 'Minor bugs fixed and performance improvements.',
  },
];

export default function PromotionsAndAnnouncements() {
  return (
    <View style={styles.container}>
     
      <Text style={styles.sectionTitle}>📢 Announcements</Text>
      {announcements.map((item) => (
        <View key={item.id} style={styles.announcementCard}>
          <Text style={styles.announcementTitle}>{item.title}</Text>
          <Text style={styles.announcementBody}>{item.body}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#BCC6CC',
  },
 
  announcementCard: {
    backgroundColor: '#BCC6CC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  announcementTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  announcementBody: {
    fontSize: 14,
    color: '#333',
  },
});
