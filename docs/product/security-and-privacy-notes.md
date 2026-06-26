# Security and Privacy Notes

LifeOS may involve sensitive personal information such as health notes, financial planning, career goals, habits, routines, and private project ideas.

This document defines the initial security and privacy principles for the MVP.

## Core Principle

LifeOS should be privacy-first by default.

The public repository must never contain real private personal data, secrets, API keys, access tokens, credentials, financial details, medical records, or personal logs.

## Public Repository Rules

The public repository may include:

- Source code
- Documentation
- Mock data
- Example configuration files
- Demo screenshots with fake data
- Test fixtures with non-realistic sample data

The public repository must not include:

- Real user data
- Real health information
- Real financial records
- Real personal notes
- Real API keys
- Database passwords
- JWT secrets
- OAuth secrets
- Production environment files
- Private exports from third-party tools

## Environment Variables

Secrets and configuration values should be stored in environment variables.

Example files may be committed only if they do not contain real values.

Allowed example file:

- `.env.example`

Not allowed files:

- `.env`
- `.env.local`
- `.env.production`
- Any environment file containing real secrets, API keys, tokens, passwords, or production configuration

## Mock Data

During MVP development, LifeOS should use mock data.

Mock data should be realistic enough to test the product experience, but it must not be copied from real personal records.

Good examples:

- Complete weekly review
- Prepare CV update
- Review monthly budget

Bad examples:

- Real bank balances
- Real medical test results
- Real addresses
- Real private conversations

## AI Privacy Notes

AI features should be designed carefully.

Before sending any user-generated content to an AI provider, the product should clearly define:

- What data is being sent
- Why it is being sent
- Whether the data is stored
- Whether the user can disable AI features
- Whether sensitive fields should be excluded

For the first MVP, AI features should use mock or manually entered non-sensitive data.

## Authentication Direction

The MVP may start with a local or single-user mode.

Future authentication should consider:

- Strong password hashing
- JWT expiration and refresh strategy
- Role-based access if multi-user support is added
- Secure session handling
- HTTPS-only production deployment

## Database Security Notes

The database should avoid storing secrets in plain text.

Future production database setup should include:

- Separate development and production databases
- Restricted database users
- Regular backups
- Migration history through Flyway
- No direct commits of database dumps containing real data

## Git Hygiene

Before committing, check:

- No `.env` files are staged
- No API keys are present
- No personal exports are included
- No real private data exists in mock files
- No generated build artifacts are committed unnecessarily

## Initial `.gitignore` Requirements

The project should ignore these files and folders:

- `.env`
- `.env.*`
- `!.env.example`
- `node_modules`
- `dist`
- `coverage`
- `.DS_Store`

## MVP Security Scope

The MVP security goal is not to build enterprise-grade security from day one.

The goal is to establish safe habits early:

- No secrets in Git
- No real private data in the public repo
- Clear environment variable usage
- Mock data during development
- Privacy-aware AI design
