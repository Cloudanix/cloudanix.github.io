---
slug: db_restorable
title: Point In Time Restore Should Be Enabled
sidebar_label: Point In Time Restore Should Be Enabled
---
> [Back](../../gcpsqlmonitoring)

### More Info:
Ensures SQL instances can be restored to a recent point. GCP will maintain a point to which the database can be restored. This point should not drift too far into the past, or else the risk of irrecoverable data loss may occur.

### Risk Level
High

### Address
Security, Reliability

### Compliance Standards
PCIDSS, CBP

### Additional Reading:
- [https://cloud.google.com/sql/docs/mysql/instance-settings](https://cloud.google.com/sql/docs/mysql/instance-settings) 