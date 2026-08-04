import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

export type CvExperience = {
  name: string;
  role: string;
  time: string;
  description: string;
};

export type CvProject = {
  name: string;
  stacks: string[];
  description: string;
};

export type CvContent = {
  name: string;
  title: string;
  bio: string;
  skillsTitle: string;
  skills: string[];
  experiencesTitle: string;
  experiences: CvExperience[];
  projectsTitle: string;
  projects: CvProject[];
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#0f172a",
    lineHeight: 1.45,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: "#2563eb",
    marginBottom: 8,
  },
  bio: {
    fontSize: 10,
    color: "#475569",
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skill: {
    fontSize: 8,
    color: "#1d4ed8",
    backgroundColor: "#eff6ff",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  item: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    gap: 6,
    marginBottom: 2,
  },
  itemName: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  itemRole: {
    fontSize: 10,
    fontFamily: "Helvetica-Oblique",
    color: "#64748b",
  },
  itemTime: {
    fontSize: 8,
    color: "#94a3b8",
    marginBottom: 3,
  },
  itemDescription: {
    fontSize: 9,
    color: "#475569",
  },
  stacks: {
    fontSize: 8,
    color: "#2563eb",
    marginBottom: 3,
  },
});

export default function CvDocument({ content }: { content: CvContent }) {
  return (
    <Document
      title={`${content.name} — CV`}
      author={content.name}
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{content.name}</Text>
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.bio}>{content.bio}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{content.skillsTitle}</Text>
          <View style={styles.skills}>
            {content.skills.map((skill) => (
              <Text key={skill} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{content.experiencesTitle}</Text>
          {content.experiences.map((experience) => (
            <View key={`${experience.name}-${experience.time}`} style={styles.item} wrap={false}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{experience.name}</Text>
                <Text style={styles.itemRole}>{experience.role}</Text>
              </View>
              <Text style={styles.itemTime}>{experience.time}</Text>
              <Text style={styles.itemDescription}>{experience.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{content.projectsTitle}</Text>
          {content.projects.map((project) => (
            <View key={project.name} style={styles.item} wrap={false}>
              <Text style={styles.itemName}>{project.name}</Text>
              {project.stacks.length > 0 && (
                <Text style={styles.stacks}>{project.stacks.join(" · ")}</Text>
              )}
              <Text style={styles.itemDescription}>{project.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
