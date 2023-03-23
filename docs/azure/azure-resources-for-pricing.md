---
slug: azure-resources-for-pricing
title: Azure Services which determine your cost
sidebar_label: Services towards your invoice
---
This page covers the below topics.

- Resources which determine your pricing
- How do we count your resources?
- An example
- Additional FAQ

### Resources which determine your pricing

Azure offers several services. Cloudanix monitors many of these services. However, we do not consider all of them to determine your Cloudanix pricing. Infact, we only use a subset of these services to generate your Cloudanix invoice.

The below table lists all the Azure services which makes up your Cloudanix invoice.

|Resource Name|Unit|Notes|
|--- |--- |--- |
|Azure SqlServer|Per instance||
|Azure Virtual Machines|Per instance||
|Azure Linux Virtual Machines|Per instance|
|Azure Storage|Per bucket|
|Azure CosmosDB||
|Azure Keyvault||
|Azure Functions|Per function|No dependency on invocations.|

### How do we count your resources?

We continuously monitor the resources and record the max during the month. At the end of the month, your invoice will be generated accordingly.

### An example
Let's say you got 20 VMs, 50 Virtual function, 20 storage buckets and 4 database of PG. Then your pricing per month will be

(20+50+20+4) = 94 * 0.99 (for Growth plan) = $93.06 per month

We simply add the count of these resources. It doesn't matter the number of your Functions invocations or the size of your VM servers. They are a single unit and gets added up in the count.


### Additional FAQ

There is an FAQ available on the [Pricing Page](https://www.cloudanix.com/pricing?ref=azure-resources-for-pricing) which answer the popular pricing related questions. Below FAQ covers Azure specific queries.

#### What about other resources like Networks, queues etc?
We monitor them but we do not use them towards your pricing. They are free.

If you have any other questions or feedback for us, please feel free to email us at support@cloudanix.com