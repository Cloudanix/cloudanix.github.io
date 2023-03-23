---
slug: ec2_instances_exist_with_ports_open_for_internal
title: Ports Should Not Be Open for Internal Traffic
sidebar_label: Ports Should Not Be Open for Internal Traffic
---
> [Back](../../sgaudit)

### More Info:
Security groups should not have all ports or protocols open to the internal traffic. Security groups should be created on a per-service basis and avoid allowing all ports or protocols even for internal access.

### Risk Level
Medium

### Address
Security

### Compliance Standards
CBP, NIST, MAS, APRA

### Additional Reading:
- [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html) 