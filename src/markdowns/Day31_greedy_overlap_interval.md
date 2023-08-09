# 435. Non-overlapping Intervals
```PYTHON
def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:

    # sort according the start of interval
    intervals.sort(key = lambda x: x[0])

    result  = 0
    lastEnd = intervals[0][1]
    for start, end in intervals[1:]:
        if start < lastEnd:
            # overlapping
            result += 1
            # update last_end in this way is functionally equal to delete the interval with larger endpoints
            lastEnd = min(lastEnd,end)
        else:
            # not overlapping, update last_end
            lastEnd = end        

    return result
```

# 763. Partition Labels
### version 1: greedy
Time complexity: O(4n)
```PYTHON
def partitionLabels(self, s: str) -> List[int]:
        # store alphabet as key and the position it appeared as value
        appeared = {}
        for i in range(len(s)):
            if s[i] in appeared.keys():
                appeared[s[i]].append(i)
            else:
                appeared[s[i]] = [i]
        
        # for each alphabet, only store the first index and last index it appeared
        # for alphabet only appeared once, set last index into first index
        intervals = []
        for idx_list in appeared.values():
            if len(idx_list) >= 2:
                intervals.append([idx_list[0],idx_list[-1]])
            elif len(idx_list) == 1:
                intervals.append([idx_list[0],idx_list[0]])
        
        # remove overlapping intervals
        # by append the last index of non-overlapping intervals into results
        result = []
        last_end = intervals[0][1]
        for interval in intervals:
            start = interval[0]
            end = interval[1]

            if start <= last_end:
                last_end = max(last_end, end)
            else: 
                result.append(last_end)
                last_end = end
        result.append(last_end)

        # transform result array from last index of non-overlapping intervals
        # into integers representing the size of the intervals
        for i in range(len(result)-1, -1, -1):
            if i == 0:
                result[i] = result[i] + 1
            else:
                result[i] = result[i] - result[i-1]
        
        return result
```
### version 2: greedy 
Time complexity: O(2n)
```PYTHON
def partitionLabels(self, s: str) -> List[int]:
    # store letter as key and the first index and last index it appeared as value
    letterIntervalDict = {}
    for index in range(len(s)):
        if s[index] in letterIntervalDict.keys():
            letterIntervalDict[s[index]][1] = index
        else:
            letterIntervalDict[s[index]] = [index,index]

    intervals = list(letterIntervalDict.values())
    result = []
    prevStart = 0
    prevEnd = intervals[0][1]
    
    for [start,end] in intervals[1:]:
        if start < prevEnd:
            # overlapping, store the larger end so that each letter appears in at most one part
            prevEnd = max(end, prevEnd)
        else:
            result.append(prevEnd-prevStart+1)
            prevEnd = end
            prevStart = start

    result.append(prevEnd-prevStart+1)
    return result
```

# 56. Merge Intervals
```PYTHON
def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort(key = lambda x: x[0])

    prevStart = intervals[0][0]
    prevEnd = intervals[0][1]
    nonOverlapInterval = []
    for [start,end] in intervals:
        if start <= prevEnd:
            # overlapping
            prevEnd = max(end,prevEnd)
        else:
            nonOverlapInterval.append([prevStart,prevEnd])
            prevStart = start
            prevEnd = end
    
    nonOverlapInterval.append([prevStart,prevEnd])
    return nonOverlapInterval
```
