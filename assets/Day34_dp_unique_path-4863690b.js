const g="data:text/markdown;base64,IyA2Mi4gVW5pcXVlIFBhdGhzCiMjIyB3YXkgMTogZHluYW1pYyBwcm9ncmFtbWluZwpUaGUgcm9ib3QgY2FuIG9ubHkgbW92ZSBlaXRoZXIgZG93biBvciByaWdodCBhdCBhbnkgcG9pbnQgaW4gdGltZS4KCigxKSBEZXRlcm1pbmUgdGhlIGBkcGAgYXJyYXkgYW5kIHRoZSBtZWFuaW5nIG9mIGl0cyBzdWJzY3JpcHRzCi0gYGRwW2ldW2pdYCA9IHRoZSBudW1iZXIgb2Ygd2F5cyB0byByZWFjaCBgZ3JpZFtpXVtqXWAgZnJvbSBgZ3JpZFswXVswIF1gCgooMikgRGV0ZXJtaW5lIHRoZSByZWN1cnJlbmNlIGZvcm11bGEKLSBgZHBbaV1bal0gPSBkcFtpLTFdW2pdICsgZHBbaV1bai0xXWAKCigzKSBUaGUgaW5pdGlhbGlzYXRpb24gb2YgdGhlIGBkcGAgYXJyYXkKLSBgZHBbMF1bMF0gPSAxYCAKCig0KSBEZXRlcm1pbmUgdGhlIHRyYXZlcnNhbCBvcmRlcgotIEFzIHRoZSByb2JvdCB0cmllcyB0byBtb3ZlIGZyb20gdGhlIHRvcC1sZWZ0IGNvcm5lciAoaS5lLiwgYGdyaWRbMF1bMF1gKSB0byB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciAoaS5lLiwgYGdyaWRbbSAtIDFdW24gLSAxXWApLCBzbyB3ZSB0cmF2ZXJzZSBmcm9tIDAgdG8gbSAoZm9yIHJvdykgYW5kIGZyb20gMCB0byBuIChmb3IgY29sdW1uKS4KCig1KSBEZXJpdmUgdGhlIHJlc3VsdGVkIGBkcGAgYXJyYXkgYW5kIGNoZWNrIGl0IGJ5IHByaW50aW5nCi0gRm9yIGV4YW1wbGUsIHdoZW4gYG0gPSAzLCBuID0gMmAsIHRoZSBgZHBgIHNob3VsZCBiZSBgW1sxLCAxXSxbMSwyXSxbMSwzXV1gLgohW10oLi9pbWFnZXMvMjAyMzAzMTUxMjIxMDgucG5nKQoKVGltZSBjb21wbGV4aXR5OiBPKG0gKiBuKVwKU3BhY2UgY29tcGxleGl0eTogTyhtICogbikKYGBgUFlUSE9OCmRlZiB1bmlxdWVQYXRocyhzZWxmLCBtOiBpbnQsIG46IGludCkgLT4gaW50OgogICAgZHAgPSBbXQogICAgCiAgICAjIGZpbGwgZmlyc3Qgcm93IG9mIGRwIHdpdGggMQogICAgZHAuYXBwZW5kKFsxXSAqIG4pCgogICAgIyBmaWxsIGZpcnN0IGNvbCBvZiBkcCB3aXRoIDEKICAgIGZvciBpIGluIHJhbmdlKDEsbSk6CiAgICAgICAgcm93ID0gWzFdICsgWzBdICogKG4gLSAxKQogICAgICAgIGRwLmFwcGVuZChyb3cpCgogICAgZm9yIGkgaW4gcmFuZ2UoMSwgbSk6CiAgICAgICAgZm9yIGogaW4gcmFuZ2UoMSwgbik6CiAgICAgICAgICAgIGRwW2ldW2pdID0gZHBbaS0xXVtqXSArIGRwW2ldW2otMV0KCiAgICByZXR1cm4gZHBbbS0xXVtuLTFdCmBgYAoKNjMuIFVuaXF1ZSBQYXRocyBJSQojIyMgd2F5IDE6IGR5bmFtaWMgcHJvZ3JhbW1pbmcKVGhlIHJvYm90IGNhbiBvbmx5IG1vdmUgZWl0aGVyIGRvd24gb3IgcmlnaHQgYXQgYW55IHBvaW50IGluIHRpbWUgYW5kIGl0cyBwYXRoIHRvIGRlc3RpbmF0aW9uIGNhbm5vdCBpbmNsdWRlIGFueSBzcXVhcmUgdGhhdCBpcyBhbiBvYnN0YWNsZS4KCigxKSBEZXRlcm1pbmUgdGhlIGBkcGAgYXJyYXkgYW5kIHRoZSBtZWFuaW5nIG9mIGl0cyBzdWJzY3JpcHRzCi0gYGRwW2ldW2pdYCA9IHRoZSBudW1iZXIgb2Ygd2F5cyB0byByZWFjaCBgZ3JpZFtpXVtqXWAgZnJvbSBgZ3JpZFswXVswXWAKCigyKSBEZXRlcm1pbmUgdGhlIHJlY3VycmVuY2UgZm9ybXVsYQotIGBkcFtpXVtqXSA9IGRwW2ktMV1bal0gKyBkcFtpXVtqLTFdYCBpZiBgZ3JpZFtpXVtqXWAgZG9lcyBub3QgaGF2ZSBvYnN0YWNsZQoKKDMpIFRoZSBpbml0aWFsaXNhdGlvbiBvZiB0aGUgYGRwYCBhcnJheQotIGBkcFswXVswXSA9IDFgIAotIGZvciB0aGUgZmlyc3Qgcm93IG9mIGRwLCBvbmx5IGZpbGwgdGhlIHNxdWFyZSBpZiBgZ3JpZFswXVtjb2x1bW5dYCBkb2VzIG5vdCBoYXZlIG9ic3RhY2xlIGFuZCBgZ3JpZFswXVtjb2x1bW4gLSAxXSA9PSAxYCAKLSBmb3IgdGhlIGZpcnN0IGNvbHVtbiBvZiBkcCwgb25seSBmaWxsIHRoZSBzcXVhcmUgaWYgYGdyaWRbcm93XVswXWAgZG9lcyBub3QgaGF2ZSBvYnN0YWNsZSBhbmQgYGdyaWRbMF1bY29sIC0gMV0gPT0gMWAgCgooNCkgRGV0ZXJtaW5lIHRoZSB0cmF2ZXJzYWwgb3JkZXIKLSBBcyB0aGUgcm9ib3QgdHJpZXMgdG8gbW92ZSBmcm9tIHRoZSB0b3AtbGVmdCBjb3JuZXIgKGkuZS4sIGBncmlkWzBdWzBdYCkgdG8gdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgKGkuZS4sIGBncmlkW20gLSAxXVtuIC0gMV1gKSwgc28gd2UgdHJhdmVyc2UgZnJvbSAxIHRvIGBub19yb3ctMWAgYW5kIGZyb20gMCB0byBgbm9fY29sLTFgLgoKKDUpIERlcml2ZSB0aGUgcmVzdWx0ZWQgYGRwYCBhcnJheSBhbmQgY2hlY2sgaXQgYnkgcHJpbnRpbmcKLSBGb3IgZXhhbXBsZSwgd2hlbiBgb2JzdGFjbGVHcmlkID0gW1swLDAsMV0sWzEsMCwwXSxbMCwxLDBdXWAsIHRoZSBgZHBgIHNob3VsZCBiZSBgW1sxLCAxLCAwXSwgWzAsIDEsIDFdLCBbMCwgMCwgMV1dYC4KCiFbXSguL2ltYWdlcy9JTUdfMEFBNjEyODYxQjk0LTEuanBlZykKVGltZSBjb21wbGV4aXR5OiBPKG5vX3JvdyAqIG5vX2NvbClcClNwYWNlIGNvbXBsZXhpdHk6IE8obm9fcm93ICogbm9fY29sKQpgYGBQWVRIT04KZGVmIHVuaXF1ZVBhdGhzV2l0aE9ic3RhY2xlcyhzZWxmLCBvYnN0YWNsZUdyaWQ6IExpc3RbTGlzdFtpbnRdXSkgLT4gaW50OgogICAgaWYgb2JzdGFjbGVHcmlkWzBdWzBdID09IDE6IHJldHVybiAwCgogICAgbm9fcm93ID0gbGVuKG9ic3RhY2xlR3JpZCkKICAgIG5vX2NvbCA9IGxlbihvYnN0YWNsZUdyaWRbMF0pCiAgICBkcCA9IFtbMF0gKiBub19jb2wgZm9yIF8gaW4gcmFuZ2Uobm9fcm93KSBdCiAgICAjIGZpbGwgdGhlIGZpcnN0IHJvdwogICAgZHBbMF1bMF0gPSAxCiAgICBmb3IgaiBpbiByYW5nZSgxLCBub19jb2wpOgogICAgICAgIGlmIGRwWzBdW2ogLSAxXSA9PSAwIG9yIG9ic3RhY2xlR3JpZFswXVtqXSA9PSAxOgogICAgICAgICAgICBkcFswXVtqXSA9IDAKICAgICAgICBlbHNlOgogICAgICAgICAgICBkcFswXVtqXSA9IDEKICAgIAogICAgIyBmaWxsIHRoZSBmaXJzdCBjb2x1bW4KICAgIGZvciBpIGluIHJhbmdlKDEsIG5vX3Jvdyk6CiAgICAgICAgaWYgZHBbaS0xXVswXSA9PSAwIG9yIG9ic3RhY2xlR3JpZFtpXVswXSA9PSAxOgogICAgICAgICAgICBkcFtpXVswXSA9IDAKICAgICAgICBlbHNlOgogICAgICAgICAgICBkcFtpXVswXSA9IDEKICAgICAgICAgICAgCiAgICBmb3IgaSBpbiByYW5nZSgxLCBub19yb3cpOgogICAgICAgIGZvciBqIGluIHJhbmdlKDEsIG5vX2NvbCk6CiAgICAgICAgICAgIGlmIG9ic3RhY2xlR3JpZFtpXVtqXSA9PSAxOgogICAgICAgICAgICAgICAgZHBbaV1bal0gPSAwCiAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICBkcFtpXVtqXSA9IGRwW2ktMV1bal0gKyBkcFtpXVtqLTFdCgogICAgcmV0dXJuIGRwWy0xXVstMV0KYGBg";export{g as default};