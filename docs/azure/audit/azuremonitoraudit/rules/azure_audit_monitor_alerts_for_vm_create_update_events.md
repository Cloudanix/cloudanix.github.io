---
slug: azure_audit_monitor_alerts_for_vm_create_update_events
title: Setup Alerts for Virtual Machine Events
sidebar_label: Setup Alerts for Virtual Machine Events
---
> [Back](../../azuremonitoraudit)

### More Info:
Ensure that an Azure activity log alert is fired whenever 'Create Virtual Machine' or 'Update Virtual Machine' events are triggered in your Microsoft Azure cloud account. Activity log alerts get triggered when a new activity log event that matches the condition specified in the alert configuration occurs. The matched condition is Whenever the Administrative Activity Log 'Create or Update Virtual Machine (Microsoft.Compute/virtualMachines)' has 'any' level, with 'any' status and event is initiated by 'any'

### Risk Level
Informational

### Address
Security

### Compliance Standards
CBP, CISMicrosoftAzureFoundations

### Additional Reading:
- [https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-activity-log](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-activity-log) 
- [https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-log](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-log) 