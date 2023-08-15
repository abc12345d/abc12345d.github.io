const G="data:text/markdown;base64,IyBMaW5rZWQgbGlzdApBIGxpbmtlZCBsaXN0IGlzIGEgc2VxdWVuY2Ugb2Ygbm9kZXMgd2hlcmUgZWFjaCBub2RlIGNvbnRhaW5zIHR3byBmaWVsZHM6IGRhdGEgZmllbGQgKGNvbnRhaW4gYSB2YWx1ZSkgYW5kIHJlZmVyZW5jZSBmaWVsZCAoY29udGFpbiBhIGxpbmsgdG8gdGhlIG5leHQgbm9kZSkuIFRoZSBsYXN0IG5vZGUgaXMgbGlua2VkIHRvIGEgdGVybWluYXRvciAobm9ybWFsbHkgYSBudWxsIHZhbHVlKSB1c2VkIHRvIHNpZ25pZnkgdGhlIGVuZCBvZiB0aGUgbGlzdC4KCjxpbWcgd2lkdGg9IjczMSIgYWx0PSIyMDIzMDIwNDEyMzMzMSIgc3JjPSJodHRwczovL2dpdGh1Yi5jb20vYWJjMTIzNDVkL2FsZ29yaXRobV9wcmFjdGljZS9hc3NldHMvNDQ1MTI3MjIvNmI0ZmRlNjAtMTcxNy00N2Y1LTk5ZTYtZDk5OGFiYjA4YTE2Ij4KCiMjIyBPcGVyYXRpb25zIG9mIExpbmtlZCBMaXN0ClRoZSBpbnNlcnRpb24gYW5kIGRlbGV0aW9uIGluIGxpbmtlZCBsaXN0IHJlcXVpcmUgYm90aCB0aGUgcHJldmlvdXMgbm9kZSBhbmQgdGhlIG5leHQgbm9kZSBvZiB0aGUgZGVzaXJlZCBub2RlIChzZWUgZmlndXJlcykuIEhvd2V2ZXIsIGEgbGlua2VkIGxpc3QncyBoZWFkIG5vZGUgZG9lcyBub3QgaGF2ZSBhIHByZXZpb3VzIG5vZGUuIFRoZXJlZm9yZSwgaG93IHdlIGhhbmRsZSB0aGUgZGVsZXRpb24gb2YgYSBoZWFkIG5vZGUgd2lsbCBkaWZmZXIgZnJvbSBob3cgd2UgaGFuZGxlIHRoZSBkZWxldGlvbiBvZiBhIG5vbi1oZWFkIG5vZGUuIAoKVGhlcmUgYXJlIHR3byB3YXlzIHRvIGFkZHJlc3MgdGhpcyBzaXR1YXRpb246XAooMSkgV3JpdGUgdHdvIHNlcGFyYXRlIHdoaWxlIGxvb3BzLCBvbmUgZm9yIGhhbmRsaW5nIHRoZSBoZWFkIG5vZGUgYW5kIGFub3RoZXIgb25lIGZvciBoYW5kbGluZyB0aGUgbm9uLWhlYWQgbm9kZXMuIFwKKDIpIEFkZCBhIGR1bW15IGhlYWQgbm9kZSBzbyB0aGF0IHRoZSByZWFsIGhlYWQgbm9kZSBiZWNvbWVzIGxpa2UgYW55IG90aGVyIG5vZGUuCgojIyMjIEluc2VydGlvbiBpbiBMaW5rZWQgTGlzdAo8aW1nIHdpZHRoPSI3MzEiIGFsdD0iMjAyMzAyMDQxMjQ3MzgiIHNyYz0iaHR0cHM6Ly9naXRodWIuY29tL2FiYzEyMzQ1ZC9hbGdvcml0aG1fcHJhY3RpY2UvYXNzZXRzLzQ0NTEyNzIyLzExNTE0NGVjLWQzZmItNDUyMS1hYmE4LWZmODcxOTIxZWNjZiI+CgojIyMjIERlbGV0aW9uIGluIExpbmtlZCBMaXN0CjxpbWcgd2lkdGg9IjcyNSIgYWx0PSIyMDIzMDIwNDEyNDQ0MyIgc3JjPSJodHRwczovL2dpdGh1Yi5jb20vYWJjMTIzNDVkL2FsZ29yaXRobV9wcmFjdGljZS9hc3NldHMvNDQ1MTI3MjIvNjUyOWYzZWUtY2E2Yi00NzRmLTlmY2YtYzNjNWIwN2FkZmE4Ij4KCiMjIyBDaGFyYWN0ZXJpc3RpYyBvZiBMaW5rZWQgTGlzdApVbmxpa2UgQXJyYXksIHRoZSBub2RlcyBvZiB0aGUgTGlua2VkIExpc3QgYXJlIG5vdCBzdG9yZWQgaW4gdGhlIGNvbnRpZ3VvdXMgbWVtb3J5IGxvY2F0aW9uLiBUaGlzIG1lYW5zIHRoYXQgTGlua2VkIExpc3RzIGRvIG5vdCBhbGxvdyBmb3IgcmFuZG9tIGFjY2VzcywgYW5kIGFjY2Vzc2luZyBlYWNoIG5vZGUgaGFzIGEgdGltZSBjb21wbGV4aXR5IG9mIE8obikuIAoKQmVzaWRlcywgZXZlbiB0aGUgaW5zZXJ0aW9uIGFuZCBkZWxldGlvbiBpbiBMaW5rZWQgTGlzdCBvbmx5IHRha2UgYSB0aW1lIGNvbXBsZXhpdHkgb2YgTygxKSBidXQgYm90aCBvcGVyYXRpb25zIHJlcXVpcmVzIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBsaXN0IGZyb20gdGhlIGhlYWQgdG8gdGhlIGRlc2lyZWQgbm9kZSwgd2hpY2ggdGFrZXMgTyhuKSB0aW1lCgojIENvbW1vbiBhbGdvcml0aG1zCiMjIyBGbG95ZCBjeWNsZSBhbGdvcml0bQpUbyBjaGVjayBpZiB0aGVyZSBpcyBhIGN5Y2xlIGluIGxpbmtlZCBsaXN0LCB3ZSBjYW4gdXNlIGBmYXN0YCBhbmQgYHNsb3dgIHBvaW50ZXJzLiBTaW5jZSBgZmFzdGAgcG9pbnRlciBtb3ZlcyBhdCBkb3VibGUgc3BlZWQgb2YgYHNsb3dgIHBvaW50ZXIsIHRoZXkgd2lsbCBpbnRlcnNlY3QgaWYgYW5kIG9ubHkgaWYgdGhlcmUgaXMgYSBjeWNsZSwgZWxzZSB0aGUgYGZhc3RgIHBvaW50ZXIgd2lsbCByZWFjaCB0aGUgdGVybWluYXRpbmcgbm9kZSAoc2VlIFtMZWV0Y29kZSAxNDIuIExpbmtlZCBMaXN0IEN5Y2xlIElJXSguL0RheTRfbGlua2VkX2xpc3QubWQvIzE0Mi1saW5rZWQtbGlzdC1jeWNsZS1paSkgZm9yIG1vcmUgZGV0YWlscykuCgoKIyBSZWZlcmVuY2UKW+S7o+eggemaj+aDs+W9lSAtIOmTvuihqF0oaHR0cHM6Ly9wcm9ncmFtbWVyY2FybC5jb20v6ZO+6KGo55CG6K665Z+656GALmh0bWwj5Y2V6ZO+6KGoKVwKW3dpa2lwZWRpYSAtIGxpbmtlZCBsaXN0XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5rZWRfbGlzdCk=";export{G as default};