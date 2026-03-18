import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  Linking,
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const GALLERY_ITEM_WIDTH = (SCREEN_WIDTH - 48 - 8) / 2;

const SPEAKERS = [
  { name: 'Eve Asante', topic: 'From personal growth to national influence', videoId: 'BBXrJGwT4Wk' },
  { name: 'Elinam Horgli', topic: 'Catalytic power of Cheerleading', videoId: '1nrBO5bi3TQ' },
  { name: 'Cat Davison', topic: 'How to Build a Movement for Community-Led Education', videoId: 'pInJEdXNnpA' },
  { name: 'Eugene Ewusi-Annan', topic: 'Inventing You', videoId: 'Dihq5GGVlxM' },
  { name: 'Emmanuel Anti', topic: 'Financial literacy for long-term prosperity', videoId: 'SxFtSlSK85c' },
];

const GALLERY = [
  require('../images/1.jpg'),
  require('../images/2.jpg'),
  require('../images/3.jpg'),
  require('../images/4.jpg'),
  require('../images/5.jpg'),
  require('../images/6.jpg'),
  require('../images/7.jpg'),
  require('../images/8.jpg'),
  require('../images/9.jpg'),
  require('../images/10.jpg'),
  require('../images/11.jpg'),
  require('../images/12.jpg'),
];

const SOCIALS = [
  { icon: 'logo-github' as const, url: 'https://github.com/fiifidawson', label: 'GitHub' },
  { icon: 'logo-linkedin' as const, url: 'https://www.linkedin.com/in/edem-dawson/', label: 'LinkedIn' },
  { icon: 'logo-twitter' as const, url: 'https://x.com/FiifiDawson_', label: 'Twitter(X)' },
];

const PRESS_URL =
  'https://www.graphic.com.gh/news/education/ghana-news-academic-city-university-holds-maiden-tedx-event.html';

export default function App() {
  const insets = useSafeAreaInsets();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ── Hero Section ── */}
        <View style={styles.hero}>
          <Image
            source={require('../images/background.jpg')}
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.15)', 'rgba(0,0,0,0.65)']}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={[styles.heroInner, { paddingTop: insets.top + 28 }]}>
            <Image
              source={require('../images/tedx-logo.jpg')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.heroTitle}>TEDxAcademicCity{'\n'}University</Text>
            <Text style={styles.heroSub}>Maiden Edition | Jan 25, 2025</Text>
            <Text style={styles.heroTagline}>Ideas Worth Spreading</Text>
          </View>
        </View>

        {/* ── About the Event ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About the Event</Text>
          <View style={styles.titleAccent} />
          <Text style={styles.body}>
            As the Lead Organizer and Licensee, I took the initiative along with
            an amazing team to bring TEDx to Academic City University as a way to
            climax my undergraduate journey. It was a representation of my growth
            from my first year to my final year and a testament to the impact the
            school had made in a short time. This vision was reflected in our
            theme: From Ripples to Waves: Making an Impact. Our maiden edition
            was a resounding success!
          </Text>
          <View style={styles.statsRow}>
            {[
              { num: '100', label: 'Attendees' },
              { num: '5', label: 'Speakers' },
              { num: '24', label: 'Team Members' },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <View style={styles.statDiv} />}
                <View style={styles.stat}>
                  <Text style={styles.statNum}>{s.num}</Text>
                  <Text style={styles.statLabel}>{s.label}</Text>
                </View>
              </React.Fragment>
            ))}
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.ctaBtn,
              pressed && { opacity: 0.85 },
            ]}
            onPress={() => Linking.openURL('https://www.ted.com')}
          >
            <Text style={styles.ctaText}>Visit Official TEDx Page</Text>
            <Ionicons name="arrow-forward" size={15} color="#fff" />
          </Pressable>
        </View>

        {/* ── Our Team ── */}
        <View style={[styles.section, styles.sectionAlt]}>
          <Text style={styles.sectionTitle}>Our Team</Text>
          <View style={styles.titleAccent} />
          <View style={styles.teamPhotoWrap}>
            <Image
              source={require('../images/team-photo.jpg')}
              style={styles.teamPhoto}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* ── Gallery ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gallery</Text>
          <View style={styles.titleAccent} />
          <View style={styles.galleryGrid}>
            {GALLERY.map((img, i) => (
              <Pressable
                key={i}
                onPress={() => setSelectedImage(i)}
                style={styles.galleryGridItem}
              >
                <Image source={img} style={styles.galleryImg} resizeMode="cover" />
              </Pressable>
            ))}
          </View>
        </View>

        {/* ── Speaker Videos ── */}
        <View style={[styles.section, styles.sectionAlt]}>
          <Text style={styles.sectionTitle}>Speaker Videos</Text>
          <View style={styles.titleAccent} />
          {SPEAKERS.map((speaker, i) => (
            <Pressable
              key={i}
              style={({ pressed }) => [
                styles.speakerCard,
                pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] },
              ]}
              onPress={() =>
                Linking.openURL(
                  `https://www.youtube.com/watch?v=${speaker.videoId}`,
                )
              }
            >
              <View style={styles.speakerInfo}>
                <Text style={styles.speakerName}>{speaker.name}</Text>
                <Text style={styles.speakerTopic}>{speaker.topic}</Text>
              </View>
              <View style={styles.playBtn}>
                <Ionicons name="play" size={16} color="#fff" />
              </View>
            </Pressable>
          ))}
        </View>

        {/* ── Press & Recognition ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Press & Recognition</Text>
          <View style={styles.titleAccent} />
          <Text style={styles.pressIntro}>
            Read about our event in the news:
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.pressCard,
              pressed && { opacity: 0.85 },
            ]}
            onPress={() => Linking.openURL(PRESS_URL)}
          >
            <Ionicons
              name="newspaper-outline"
              size={22}
              color={Colors.primary}
            />
            <Text style={styles.pressTitle}>
              Academic City University holds Maiden TEDx Event
            </Text>
            <Ionicons name="open-outline" size={16} color={Colors.textLight} />
          </Pressable>
        </View>

        {/* ── Footer ── */}
        <View style={styles.footer}>
          <Text style={styles.footerCredit}>
            Organized by Fiifi Dawson | Lead Organizer & Licensee (2025)
          </Text>
          <View style={styles.socialRow}>
            {SOCIALS.map((s) => (
              <Pressable
                key={s.label}
                style={({ pressed }) => [
                  styles.socialBtn,
                  pressed && { opacity: 0.7 },
                ]}
                onPress={() => Linking.openURL(s.url)}
              >
                <Ionicons name={s.icon} size={20} color="#fff" />
                <Text style={styles.socialLabel}>{s.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* ── Fullscreen Gallery Viewer ── */}
      <Modal
        visible={selectedImage !== null}
        transparent
        animationType="fade"
        statusBarTranslucent
      >
        <View style={styles.modalBg}>
          <Pressable
            style={[styles.modalClose, { top: insets.top + 16 }]}
            onPress={() => setSelectedImage(null)}
          >
            <Ionicons name="close" size={26} color="#fff" />
          </Pressable>
          {selectedImage !== null && (
            <Image
              source={GALLERY[selectedImage]}
              style={styles.modalImg}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },

  /* Hero */
  hero: {
    height: SCREEN_HEIGHT * 0.48,
    justifyContent: 'flex-end',
  },
  heroInner: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    lineHeight: 34,
    marginBottom: 10,
  },
  heroSub: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.85)',
    marginBottom: 4,
  },
  heroTagline: {
    fontSize: 13,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.55)',
    fontStyle: 'italic',
  },

  /* Sections */
  section: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionAlt: {
    backgroundColor: Colors.bgAlt,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 6,
  },
  titleAccent: {
    width: 28,
    height: 3,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    marginBottom: 20,
  },

  /* About */
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.textSecondary,
    lineHeight: 26,
  },
  ctaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 24,
    gap: 6,
    marginTop: 24,
  },
  ctaText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },

  /* Stats (inside About) */
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNum: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.primary,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.textSecondary,
    marginTop: 2,
  },
  statDiv: {
    width: 1,
    height: 30,
    backgroundColor: Colors.border,
  },

  /* Team */
  teamPhotoWrap: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  teamPhoto: {
    width: '100%',
    height: 220,
  },

  /* Gallery Grid */
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  galleryGridItem: {
    width: GALLERY_ITEM_WIDTH,
    height: 140,
    borderRadius: 8,
    overflow: 'hidden',
  },
  galleryImg: {
    width: '100%',
    height: '100%',
  },

  /* Speakers */
  speakerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bg,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  speakerInfo: {
    flex: 1,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 3,
  },
  speakerTopic: {
    fontSize: 13,
    fontWeight: '400',
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  playBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },

  /* Press */
  pressIntro: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  pressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgAlt,
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  pressTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: Colors.primary,
    lineHeight: 20,
  },

  /* Footer */
  footer: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  footerCredit: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 14,
  },
  socialBtn: {
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
  },
  socialLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.55)',
  },

  /* Modal */
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalClose: {
    position: 'absolute',
    right: 20,
    zIndex: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImg: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  },
});
