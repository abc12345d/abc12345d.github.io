const I="data:text/markdown;base64,IyAxMTAuIEJhbGFuY2VkIEJpbmFyeSBUcmVlCiMjIyB3YXkgMTogcmVjdXJzaXZlIGFwcHJvYWNoIApXYXkgMSBpcyBsZXNzIGVmZmljaWVudCBhcyB3ZSB3aWxsIGFwcGx5IHRoZSBgZ2V0X2hlaWdodGAgdG8gdmlzaXRlZCBub2RlIGFnYWluLlwKVGltZSBjb21wbGV4aXR5OiBPKG48c3VwPjI8L3N1cD4pXApTcGFjZSBjb21wbGV4aXR5OiBPKGxvZyBuKQoKYGBgUFlUSE9OCmRlZiBpc0JhbGFuY2VkKHNlbGYsIHJvb3Q6IE9wdGlvbmFsW1RyZWVOb2RlXSkgLT4gYm9vbDoKICAgIGRlZiBnZXRfaGVpZ2h0KGN1cnIpOgogICAgICAgIGlmIG5vdCBjdXJyOgogICAgICAgICAgICByZXR1cm4gMAogICAgICAgIHJldHVybiAxICsgbWF4KGdldF9oZWlnaHQoY3Vyci5sZWZ0KSwgZ2V0X2hlaWdodChjdXJyLnJpZ2h0KSkKCiAgICBpZiBub3Qgcm9vdDoKICAgICAgICByZXR1cm4gVHJ1ZQogICAgCiAgICBpZiBhYnMoZ2V0X2hlaWdodChyb290LmxlZnQpIC0gZ2V0X2hlaWdodChyb290LnJpZ2h0KSkgPiAxOgogICAgICAgIHJldHVybiBGYWxzZQogICAgCiAgICByZXR1cm4gc2VsZi5pc0JhbGFuY2VkKHJvb3QubGVmdCkgYW5kIHNlbGYuaXNCYWxhbmNlZChyb290LnJpZ2h0KQpgYGAKCiMjIyB3YXkgMjogcmVjdXJzaXZlIGFwcHJvYWNoCldheSAyIGlzIG1vcmUgZWZmaWNpZW50IGNvbXBhcmVkIHRvIHdheSAxIHNpbmNlIHdlIGp1c3QgcmV0dXJuIC0xIG9uY2Ugd2UgaGF2ZSBmb3VuZCB1bmJhbGFuY2VkIHN1YnRyZWUuXApUaW1lIGNvbXBsZXhpdHk6IE8obilcClNwYWNlIGNvbXBsZXhpdHk6IE8obG9nIG4pCgpgYGBQWVRIT04KZGVmIGlzQmFsYW5jZWQoc2VsZiwgcm9vdDogT3B0aW9uYWxbVHJlZU5vZGVdKSAtPiBib29sOgogICAgZGVmIGdldF9oZWlnaHQoY3Vycik6CiAgICAgICAgaWYgbm90IGN1cnI6CiAgICAgICAgICAgIHJldHVybiAwCgogICAgICAgIGxlZnRfaGVpZ2h0ID0gZ2V0X2hlaWdodChjdXJyLmxlZnQpCiAgICAgICAgcmlnaHRfaGVpZ2h0ID0gZ2V0X2hlaWdodChjdXJyLnJpZ2h0KQoKICAgICAgICBpZiBsZWZ0X2hlaWdodCA9PSAtMSBvciByaWdodF9oZWlnaHQgPT0gLTE6CiAgICAgICAgICAgICMgYSB0cmVlIGlzIHVuYmFsYW5jZWQgaWYgZWl0aGVyIG9mIGl0cyBzdWJ0cmVlIGlzIHVuYmFsYW5jZWQKICAgICAgICAgICAgcmV0dXJuIC0xCgogICAgICAgIGlmIGFicyhsZWZ0X2hlaWdodCAtIHJpZ2h0X2hlaWdodCkgPiAxOgogICAgICAgICAgICAjIGZvdW5kIHVuYmFsYW5jZWQgdHJlZQogICAgICAgICAgICByZXR1cm4gLTEKCiAgICAgICAgIyBnZXQgaGVpZ2h0IG9mIGN1cnIgbm9kZQogICAgICAgIHJldHVybiAxICsgbWF4KGxlZnRfaGVpZ2h0LCByaWdodF9oZWlnaHQpCgogICAgcmV0dXJuIFRydWUgaWYgZ2V0X2hlaWdodChyb290KSAhPSAtMSBlbHNlIEZhbHNlCmBgYAoKIyAyNTcuIEJpbmFyeSBUcmVlIFBhdGhzCgo8aW1nIHdpZHRoPSI5NjkiIGFsdD0iMjAyMzAyMTkxMTI0MjgiIHNyYz0iaHR0cHM6Ly9naXRodWIuY29tL2FiYzEyMzQ1ZC9hbGdvcml0aG1fcHJhY3RpY2UvYXNzZXRzLzQ0NTEyNzIyLzZmY2EzOWVjLTUxYjMtNDZhZS05NDgxLTEzYWNlYWZlMmQ0NyI+CgojIyMgd2F5IDE6IGFzIG91ciBpbnB1dCB0byBuZXh0IGxldmVsIGlzIGEgJ211dGFibGUnIHBhdGgsIHdlIG5lZWQgdG8gYHBhdGgucG9wKClgIHdoZW4gYmFja3RyYWNraW5nCgpgYGBQWVRIT04KZGVmIGJpbmFyeVRyZWVQYXRocyhzZWxmLCByb290OiBPcHRpb25hbFtUcmVlTm9kZV0pIC0+IExpc3Rbc3RyXToKICAgIGRlZiByZWN1cihjdXJyLCBwYXRoKToKICAgICAgICBwYXRoLmFwcGVuZChzdHIoY3Vyci52YWwpKQoKICAgICAgICBpZiBub3QgKGN1cnIubGVmdCBvciBjdXJyLnJpZ2h0KToKICAgICAgICAgICAgcmVzX2xpc3QuYXBwZW5kKCItPiIuam9pbihwYXRoKSkKICAgICAgICAgICAgcmV0dXJuCiAgICAgICAgCiAgICAgICAgaWYgY3Vyci5sZWZ0OgogICAgICAgICAgICByZWN1cihjdXJyLmxlZnQsIHBhdGgpCiAgICAgICAgICAgIHBhdGgucG9wKCkKCiAgICAgICAgaWYgY3Vyci5yaWdodDogIAogICAgICAgICAgICByZWN1cihjdXJyLnJpZ2h0LCBwYXRoKQogICAgICAgICAgICBwYXRoLnBvcCgpCgogICAgcmVzX2xpc3QgPSBbXQogICAgcmVjdXIocm9vdCwgW10pCiAgICByZXR1cm4gcmVzX2xpc3QKYGBgCgojIyMgd2F5IDI6IGFzIG91ciBpbnB1dCB0byBuZXh0IGxldmVsIGlzIGEgbmV3IHBhdGgsIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gIGFueXRoaW5nIHdoZW4gYmFja3RyYWNraW5nCgpgYGBQWVRIT04KZGVmIGJpbmFyeVRyZWVQYXRocyhzZWxmLCByb290OiBPcHRpb25hbFtUcmVlTm9kZV0pIC0+IExpc3Rbc3RyXToKICAgIGRlZiByZWN1cihjdXJyLCBwYXRoKToKICAgICAgICBpZiBub3QgKGN1cnIubGVmdCBvciBjdXJyLnJpZ2h0KToKICAgICAgICAgICAgcGF0aC5hcHBlbmQoc3RyKGN1cnIudmFsKSkKICAgICAgICAgICAgcmVzX2xpc3QuYXBwZW5kKCItPiIuam9pbihwYXRoKSkKICAgICAgICAgICAgcmV0dXJuCiAgICAgICAgCiAgICAgICAgaWYgY3Vyci5sZWZ0OgogICAgICAgICAgICByZWN1cihjdXJyLmxlZnQsIHBhdGggKyBbc3RyKGN1cnIudmFsKV0pIAoKICAgICAgICBpZiBjdXJyLnJpZ2h0OgogICAgICAgICAgICByZWN1cihjdXJyLnJpZ2h0LCBwYXRoICsgW3N0cihjdXJyLnZhbCldKSAKCiAgICAgICAgCiAgICByZXNfbGlzdCA9IFtdCiAgICByZWN1cihyb290LCBbXSkKICAgIHJldHVybiByZXNfbGlzdApgYGAKCiMgNDA0LiBTdW0gb2YgTGVmdCBMZWF2ZXMKCmBgYFBZVEhPTgpkZWYgc3VtT2ZMZWZ0TGVhdmVzKHNlbGYsIHJvb3Q6IE9wdGlvbmFsW1RyZWVOb2RlXSkgLT4gaW50OgogICAgZGVmIHJlY3VyKGN1cnIpOgogICAgICAgIGlmIG5vdCBjdXJyOgogICAgICAgICAgICByZXR1cm4gMAogICAgICAgIGlmIGN1cnIubGVmdCBhbmQgbm90IGN1cnIubGVmdC5sZWZ0IGFuZCBub3QgY3Vyci5sZWZ0LnJpZ2h0OgogICAgICAgICAgICByZXR1cm4gY3Vyci5sZWZ0LnZhbCArIHJlY3VyKGN1cnIucmlnaHQpCgogICAgICAgIHJldHVybiByZWN1cihjdXJyLmxlZnQpICsgcmVjdXIoY3Vyci5yaWdodCkKICAgIAogICAgcmV0dXJuIHJlY3VyKHJvb3QpCmBgYAoK";export{I as default};
