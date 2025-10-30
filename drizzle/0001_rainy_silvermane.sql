CREATE TABLE `certificates` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`certificateNumber` varchar(64) NOT NULL,
	`issuedAt` timestamp NOT NULL DEFAULT (now()),
	`finalExamScore` int NOT NULL,
	`capstoneProjectScore` int,
	`certificateUrl` text,
	CONSTRAINT `certificates_id` PRIMARY KEY(`id`),
	CONSTRAINT `certificates_userId_unique` UNIQUE(`userId`),
	CONSTRAINT `certificates_certificateNumber_unique` UNIQUE(`certificateNumber`)
);
--> statement-breakpoint
CREATE TABLE `enrollments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`enrolledAt` timestamp NOT NULL DEFAULT (now()),
	`status` enum('active','completed','suspended') NOT NULL DEFAULT 'active',
	`completedAt` timestamp,
	CONSTRAINT `enrollments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `exam_attempts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`examType` enum('practice_half','practice_full','final') NOT NULL,
	`score` int NOT NULL,
	`passed` boolean NOT NULL,
	`attemptedAt` timestamp NOT NULL DEFAULT (now()),
	`timeSpentMinutes` int,
	`answers` text,
	CONSTRAINT `exam_attempts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `lab_completions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleNumber` int NOT NULL,
	`labNumber` int NOT NULL,
	`completedAt` timestamp NOT NULL DEFAULT (now()),
	`notes` text,
	CONSTRAINT `lab_completions_id` PRIMARY KEY(`id`),
	CONSTRAINT `lab_completions_userId_moduleNumber_labNumber_unique` UNIQUE(`userId`,`moduleNumber`,`labNumber`)
);
--> statement-breakpoint
CREATE TABLE `module_progress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleNumber` int NOT NULL,
	`status` enum('not_started','in_progress','completed') NOT NULL DEFAULT 'not_started',
	`startedAt` timestamp,
	`completedAt` timestamp,
	`lastAccessedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `module_progress_id` PRIMARY KEY(`id`),
	CONSTRAINT `module_progress_userId_moduleNumber_unique` UNIQUE(`userId`,`moduleNumber`)
);
--> statement-breakpoint
CREATE TABLE `quiz_attempts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleNumber` int NOT NULL,
	`score` int NOT NULL,
	`totalQuestions` int NOT NULL,
	`correctAnswers` int NOT NULL,
	`attemptedAt` timestamp NOT NULL DEFAULT (now()),
	`timeSpentMinutes` int,
	CONSTRAINT `quiz_attempts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `student_notes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleNumber` int NOT NULL,
	`content` text NOT NULL,
	`isBookmarked` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `student_notes_id` PRIMARY KEY(`id`)
);
