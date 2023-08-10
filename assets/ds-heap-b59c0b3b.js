const g="data:text/markdown;base64,IyBIZWFwIChkYXRhIHN0cnVjdHVyZSkKQSBoZWFwIGlzIGEgc3BlY2lhbGl6ZWQgVHJlZS1iYXNlZCBkYXRhIHN0cnVjdHVyZSBpbiB3aGljaCB0aGUgdHJlZSBpcyBhIGNvbXBsZXRlIGJpbmFyeSB0cmVlIHRoYXQgc2F0aXNmaWVzIHRoZSBoZWFwIHByb3BlcnR5LiBUd28gaGVhcCBwcm9wZXJ0aWVzIHJlc3VsdCBpbiB0d28gdHlwZXMgb2YgdGhlIGhlYXA6ICgxKSBNaW4tSGVhcCBhbmQgKDIpIE1heC1IZWFwLgoKTWluLUhlYXA6IFwKRm9yIGFueSBnaXZlbiBub2RlIEMsIGlmIFAgaXMgYSBwYXJlbnQgbm9kZSBvZiBDLCB0aGVuIHRoZSB2YWx1ZSBvZiBQIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgdmFsdWUgb2YgQy4KCk1heC1IZWFwOiBcCkZvciBhbnkgZ2l2ZW4gbm9kZSBDLCBpZiBQIGlzIGEgcGFyZW50IG5vZGUgb2YgQywgdGhlbiB0aGUgdmFsdWUgb2YgUCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHZhbHVlIG9mIEMuCgpBcyBhIGhlYXAgaXMgYSBjb21wbGV0ZSBiaW5hcnkgdHJlZSwgaXQgaXMgbW9yZSBlZmZpY2llbnQgdG8gaW1wbGVtZW50IGl0IGluIGFuIGFycmF5IGluc3RlYWQgb2YgbGlua2VkIHRyZWUgbm9kZXMuIFRvIG1hcCB0aGUgZWxlbWVudHMgb2YgYSBoZWFwIGludG8gYW4gYXJyYXk6IGlmIGEgbm9kZSBpcyBzdG9yZWQgYXQgaW5kZXggaSwgdGhlbiBpdHMgbGVmdCBjaGlsZCBpcyBzdG9yZWQgYXQgaW5kZXggMmkgKyAxIGFuZCBpdHMgcmlnaHQgY2hpbGQgYXQgaW5kZXggMmkgKyAyLgoKIVtdKC4vaW1hZ2VzLzIwMjMwMjE0MTA0NzMwLnBuZykgIAoKIyMjIE9wZXJhdGlvbnMgb2YgSGVhcAojIyMjIEluc2VydGlvbiBpbiBIZWFwCldoZW4gd2UgaW5zZXJ0IGFuIGVsZW1lbnQsIGl0IGFsd2F5cyBnb2VzIGluIHRoZSBuZXh0IGVtcHR5IHNwb3QobG9va2luZyB0b3AgdG8gYm90dG9tIGFuZCBsZWZ0IHRvIHJpZ2h0KS4gV2UgZmlyc3QgaW5zZXJ0IHRoZSBlbGVtZW50LCB0aGVuIGJ1YmJsZSBpdCB1cCB1bnRpbCB3ZSBnZXQgdG8gdGhlIHJpZ2h0IHNwb3QuCmBgYApTdXBwb3NlIHRoZSBIZWFwIGlzIGEgTWF4LUhlYXAgYXM6CiAgICAgIDEwCiAgICAvICAgIFwKICAgNSAgICAgIDMKICAvIFwKIDIgICA0CgpUaGUgbmV3IGVsZW1lbnQgdG8gYmUgaW5zZXJ0ZWQgaXMgMTUuCgpQcm9jZXNzOgpTdGVwIDE6IEluc2VydCB0aGUgbmV3IGVsZW1lbnQgYXQgdGhlIGVuZC4KICAgICAgMTAKICAgIC8gICAgXAogICA1ICAgICAgMwogIC8gXCAgICAvCiAyICAgNCAgMTUKClN0ZXAgMjogSGVhcGlmeSB0aGUgbmV3IGVsZW1lbnQgZm9sbG93aW5nIGJvdHRvbS11cCAKICAgICAgICBhcHByb2FjaC4KLT4gMTUgaXMgbW9yZSB0aGFuIGl0cyBwYXJlbnQgMywgc3dhcCB0aGVtLgogICAgICAgMTAKICAgIC8gICAgXAogICA1ICAgICAgMTUKICAvIFwgICAgLwogMiAgIDQgIDMKCi0+IDE1IGlzIGFnYWluIG1vcmUgdGhhbiBpdHMgcGFyZW50IDEwLCBzd2FwIHRoZW0uCiAgICAgICAxNQogICAgLyAgICBcCiAgIDUgICAgICAxMAogIC8gXCAgICAvCiAyICAgNCAgMwoKVGhlcmVmb3JlLCB0aGUgZmluYWwgaGVhcCBhZnRlciBpbnNlcnRpb24gaXM6CiAgICAgICAxNQogICAgLyAgICBcCiAgIDUgICAgICAxMAogIC8gXCAgICAvCiAyICAgNCAgMwpgYGAKCiMjIyMgRGVsZXRpb24gaW4gSGVhcApXZSByZW1vdmUgdGhlIHJvb3Qgbm9kZSBvZiB0aGUgaGVhcCwgYW5kIHN3YXAgdGhlIGxhc3QgYWRkZWQgZWxlbWVudCB0byB0aGUgcm9vdC4gQXMgdGhlIGxhc3QgYWRkZWQgZWxlbWVtdCBtaWdodCBub3QgYmUgdGhlIHJpZ2h0IHNwb3QsIHNvIHdlIHRha2UgdGhlIHJvb3QgZWxlbWVudCBhbmQgYnViYmxlIGl0IGRvd24gdG8gdGhlIG5leHQgbGF5ZXIgYnkgY29tcGFyaW5nIHdpdGggaXRzIGNoaWxkcmVuIG5vZGUgCgpgYGAKU3VwcG9zZSB0aGUgSGVhcCBpcyBhIE1heC1IZWFwIGFzOgogICAgICAxMAogICAgLyAgICBcCiAgIDUgICAgICAzCiAgLyBcCiAyICAgNAoKVGhlIGVsZW1lbnQgdG8gYmUgZGVsZXRlZCBpcyByb290LCBpLmUuIDEwLgoKUHJvY2VzczoKVGhlIGxhc3QgZWxlbWVudCBpcyA0LgoKU3RlcCAxOiBSZXBsYWNlIHRoZSBsYXN0IGVsZW1lbnQgd2l0aCByb290LCBhbmQgZGVsZXRlIGl0LgogICAgICA0CiAgICAvICAgIFwKICAgNSAgICAgIDMKICAvIAogMiAgIAoKU3RlcCAyOiBIZWFwaWZ5IHJvb3QuCkZpbmFsIEhlYXA6CiAgICAgIDUKICAgIC8gICAgXAogICA0ICAgICAgMwogIC8gCiAyCmBgYAoKIyBIZWFwIHNvcnQKVGhlIHRpbWUgY29tcGxleGl0eSBvZiB1c2luZyBoZWFwIGluIHNvcnRpbmcgaXMgTyhuIGxvZyBuKS4gQm90aCBgaGVhcHB1c2hgIGFuZCBgaGVhcHBvcGAgb3BlcmF0aW9ucyBuZWVkIE8obG9nIG4pLiBVbmxpa2Ugb3RoZXIgc29ydGluZyBhbGdvcml0aG0sIGhlYXAgc29ydCBpcyBub3QgYSBzdGFibGUgc29ydGluZyBhbGdvcml0aG0uCmBgYFBZVEhPTgpkZWYgaGVhcHNvcnQoaXRlcmFibGUpOgogICAgaCA9IFtdCiAgICBmb3IgdmFsdWUgaW4gaXRlcmFibGU6CiAgICAgICAgaGVhcHB1c2goaCwgdmFsdWUpCiAgICByZXR1cm4gW2hlYXBwb3AoaCkgZm9yIGkgaW4gcmFuZ2UobGVuKGgpKV0KYGBgCkluIFB5dGhvbiwgSGVhcCBlbGVtZW50cyBjYW4gYmUgdHVwbGVzLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYXNzaWduaW5nIGNvbXBhcmlzb24gdmFsdWVzIChzdWNoIGFzIHRhc2sgcHJpb3JpdGllcykgYWxvbmdzaWRlIHRoZSBtYWluIHJlY29yZCBiZWluZyB0cmFja2VkOgpgYGBQWVRIT04KaCA9IFtdCj4+PiBoZWFwcHVzaChoLCAoNSwgJ3dyaXRlIGNvZGUnKSkKPj4+IGhlYXBwdXNoKGgsICgxLCAnd3JpdGUgc3BlYycpKQo+Pj4gaGVhcHB1c2goaCwgKDMsICdjcmVhdGUgdGVzdHMnKSkKPj4+IGhlYXBwb3AoaCkKKDEsICd3cml0ZSBzcGVjJykKYGBgCiMgT3RoZXJzCi0gUHJpb3JpdHkgcXVldWUgaXMgdGhlIGFic3RyYWN0IGRlc2NyaXB0aW9uIG9mIHRoaXMgY29uY3JldGUgZGF0YSBzdHJ1Y3R1cmUuCi0gVG8gaW1wbGVtZW50IG1pbi1oZWFwIGluIFB5dGhvbiwgdXNlIGBoZWFwcWAgbW9kdWxlLiBUaGVyZSBhcmUgdHdvIHdheXMgdG8gaW1wbGVtZW50IG1heC1oZWFwIGluIFB5dGhvbjpcCihhKSBpbnZlcnQgdGhlIHZhbHVlIG9mIHRoZSBrZXlzIGFuZCB1c2UgaGVhcHEuIEZvciBleGFtcGxlLCB0dXJuIDEwMDAuMCBpbnRvIC0xMDAwLjAgYW5kIDUuMCBpbnRvIC01LjAuXAooYikgdXNlIHVuZG9jdW1lbnRlZCBmdW50aW9ucyBvZiBgaGVhcHFgIG1vZHVsZQpgYGBQWVRIT04KaW1wb3J0IGhlYXBxCmxpc3RGb3JUcmVlID0gWzEsMiwzLDQsNSw2LDcsOF0gICAgCmhlYXBxLmhlYXBpZnkobGlzdEZvclRyZWUpICAgICAgICAgICAgICMgZm9yIGEgbWluIGhlYXAKaGVhcHEuX2hlYXBpZnlfbWF4KGxpc3RGb3JUcmVlKSAgICAgICAgIyB1bmRvY3VtZW50ZWQgZnVuY3Rpb24gZm9yIGEgbWF4aGVhcCEhCgojIElmIHlvdSB0aGVuIHdhbnQgdG8gcG9wIGVsZW1lbnRzLCB1c2U6CmhlYXBxLmhlYXBwb3AobWluaGVhcCkgICAgICAjIHBvcCBmcm9tIG1pbmhlYXAKaGVhcHEuX2hlYXBwb3BfbWF4KG1heGhlYXApICMgdW5kb2N1bWVudGVkIHBvcCBmcm9tIG1heGhlYXAKYGBgCgojIFJlZmVyZW5jZQpbV2lraXBlZGlhIC0gaGVhcCAoZGF0YSBzdHJ1Y3R1cmUpXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZWFwXyhkYXRhX3N0cnVjdHVyZSkpXApbU3RhY2tPdmVyRmxvdyAtIFdoYXQgZG8gSSB1c2UgZm9yIGEgbWF4LWhlYXAgaW1wbGVtZW50YXRpb24gaW4gUHl0aG9uP10oaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjUwMTQ1Ny93aGF0LWRvLWktdXNlLWZvci1hLW1heC1oZWFwLWltcGxlbWVudGF0aW9uLWluLXB5dGhvbilcCltQeXRob24gZG9jdW1lbnRhdGlvbiAtIGhlYXBxIG1vZHVsZSBdKGh0dHBzOi8vZG9jcy5weXRob24ub3JnLzMvbGlicmFyeS9oZWFwcS5odG1sKVwKW0dlZWtzZm9yZ2Vla3MgLSBJbnNlcnRpb24gYW5kIERlbGV0aW9uIGluIEhlYXBzXShodHRwczovL3d3dy5nZWVrc2ZvcmdlZWtzLm9yZy9pbnNlcnRpb24tYW5kLWRlbGV0aW9uLWluLWhlYXBzLykK";export{g as default};