import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, unique } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Course enrollments - tracks which users are enrolled in the course
 */
export const enrollments = mysqlTable("enrollments", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  enrolledAt: timestamp("enrolledAt").defaultNow().notNull(),
  status: mysqlEnum("status", ["active", "completed", "suspended"]).default("active").notNull(),
  completedAt: timestamp("completedAt"),
});

export type Enrollment = typeof enrollments.$inferSelect;
export type InsertEnrollment = typeof enrollments.$inferInsert;

/**
 * Module progress - tracks completion of each module
 */
export const moduleProgress = mysqlTable("module_progress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleNumber: int("moduleNumber").notNull(), // 1-6
  status: mysqlEnum("status", ["not_started", "in_progress", "completed"]).default("not_started").notNull(),
  startedAt: timestamp("startedAt"),
  completedAt: timestamp("completedAt"),
  lastAccessedAt: timestamp("lastAccessedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  userModuleUnique: unique().on(table.userId, table.moduleNumber),
}));

export type ModuleProgress = typeof moduleProgress.$inferSelect;
export type InsertModuleProgress = typeof moduleProgress.$inferInsert;

/**
 * Quiz attempts and scores
 */
export const quizAttempts = mysqlTable("quiz_attempts", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleNumber: int("moduleNumber").notNull(), // 1-6
  score: int("score").notNull(), // 0-100
  totalQuestions: int("totalQuestions").notNull(),
  correctAnswers: int("correctAnswers").notNull(),
  attemptedAt: timestamp("attemptedAt").defaultNow().notNull(),
  timeSpentMinutes: int("timeSpentMinutes"),
});

export type QuizAttempt = typeof quizAttempts.$inferSelect;
export type InsertQuizAttempt = typeof quizAttempts.$inferInsert;

/**
 * Lab completions - tracks which labs students have completed
 */
export const labCompletions = mysqlTable("lab_completions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleNumber: int("moduleNumber").notNull(),
  labNumber: int("labNumber").notNull(), // e.g., 1, 2, 3 for labs within a module
  completedAt: timestamp("completedAt").defaultNow().notNull(),
  notes: text("notes"), // Optional student notes
}, (table) => ({
  userLabUnique: unique().on(table.userId, table.moduleNumber, table.labNumber),
}));

export type LabCompletion = typeof labCompletions.$inferSelect;
export type InsertLabCompletion = typeof labCompletions.$inferInsert;

/**
 * Certification exam attempts
 */
export const examAttempts = mysqlTable("exam_attempts", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  examType: mysqlEnum("examType", ["practice_half", "practice_full", "final"]).notNull(),
  score: int("score").notNull(), // 0-100
  passed: boolean("passed").notNull(), // true if score >= 80
  attemptedAt: timestamp("attemptedAt").defaultNow().notNull(),
  timeSpentMinutes: int("timeSpentMinutes"),
  answers: text("answers"), // JSON string of answers for review
});

export type ExamAttempt = typeof examAttempts.$inferSelect;
export type InsertExamAttempt = typeof examAttempts.$inferInsert;

/**
 * Certificates issued to students
 */
export const certificates = mysqlTable("certificates", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(), // One certificate per user
  certificateNumber: varchar("certificateNumber", { length: 64 }).notNull().unique(),
  issuedAt: timestamp("issuedAt").defaultNow().notNull(),
  finalExamScore: int("finalExamScore").notNull(),
  capstoneProjectScore: int("capstoneProjectScore"), // Optional, for future use
  certificateUrl: text("certificateUrl"), // URL to certificate PDF/image
});

export type Certificate = typeof certificates.$inferSelect;
export type InsertCertificate = typeof certificates.$inferInsert;

/**
 * Student notes and bookmarks
 */
export const studentNotes = mysqlTable("student_notes", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleNumber: int("moduleNumber").notNull(),
  content: text("content").notNull(),
  isBookmarked: boolean("isBookmarked").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});