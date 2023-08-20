import "./Notes.css";
import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const Notes = () => (
  <div className="NotesContainer">
    <section id="DS_Algo">
      <h1>Data Structures and Algorithms</h1>
      <ul>
        <li>
          <span>12 MAR 2023 {">>"} </span>
          <NavLink to="/notes/algo-dp">Algorithm - Dynamic Programming</NavLink>
        </li>
        <li>
          <span>11 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day39_dp_complete_knapsack">
            Day 39 - Dp Complete Knapsack
          </NavLink>
        </li>
        <li>
          <span>10 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day38_dp_complete_knapsack">
            Day 38 - Dp Complete Knapsack
          </NavLink>
        </li>
        <li>
          <span>09 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day37_dp_01knapsack">
            Day 37 - Dp 01 knapsack
          </NavLink>
        </li>
        <li>
          <span>08 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day36_dp_01knapsack">
            Day 36 - Dp 01 knapsack
          </NavLink>
        </li>
        <li>
          <span>07 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day35_dp">Day 35 - Dp</NavLink>
        </li>
        <li>
          <span>06 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day34_dp_unique_path">
            Day 34 - Dp Unique Path
          </NavLink>
        </li>
        <li>
          <span>05 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day33_dynamic_programming">
            Day 33 - Dynamic Programming
          </NavLink>
        </li>
        <li>
          <span>04 MAR 2023 {">>"} </span>
          <NavLink to="/notes/algo-greedy">Algorithm - Greedy</NavLink>
        </li>
        <li>
          <span>04 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day32_greedy">Day 32 - Greedy</NavLink>
        </li>
        <li>
          <span>03 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day31_greedy_overlap_interval">
            Day 31 - Greedy Overlap Interval
          </NavLink>
        </li>
        <li>
          <span>02 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day30_greedy">Day 30 - Greedy</NavLink>
        </li>
        <li>
          <span>01 MAR 2023 {">>"} </span>
          <NavLink to="/notes/Day29_greedy">Day 29 - Greedy</NavLink>
        </li>
        <li>
          <span>28 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day28_greedy">Day 28 - Greedy</NavLink>
        </li>
        <li>
          <span>27 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day27_greedy">Day 27 - Greedy</NavLink>
        </li>
        <li>
          <span>26 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day26_backtracking_hard">
            Day 26 - Backtracking Hard
          </NavLink>
        </li>
        <li>
          <span>25 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day25_backtracking_permutation">
            Day 25 - Backtracking Permutation
          </NavLink>
        </li>
        <li>
          <span>24 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day24_backtracking_partition_subset">
            Day 24 - Backtracking Partition Subset
          </NavLink>
        </li>
        <li>
          <span>23 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day23_backtracking_combination_partition">
            Day 23 - Backtracking Combination Partition
          </NavLink>
        </li>
        <li>
          <span>22 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day22_backtracking_combination">
            Day 22 - Backtracking Combination
          </NavLink>
        </li>
        <li>
          <span>21 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day21_backtracking_combination">
            Day 21 - Backtracking Combination
          </NavLink>
        </li>
        <li>
          <span>20 FEB 2023 {">>"} </span>
          <NavLink to="/notes/ds-binaryTree">
            Data Structure - Binary Tree
          </NavLink>
        </li>
        <li>
          <span>20 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day20_binary_tree">Day 20 - Binary Tree</NavLink>
        </li>
        <li>
          <span>19 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day19_binary_tree">Day 19 - Binary Tree</NavLink>
        </li>
        <li>
          <span>18 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day18_binary_tree">Day 18 - Binary Tree</NavLink>
        </li>
        <li>
          <span>17 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day17_binary_tree">Day 17 - Binary Tree</NavLink>
        </li>
        <li>
          <span>16 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day16_binary_tree">Day 16 - Binary Tree</NavLink>
        </li>
        <li>
          <span>15 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day15_binary_tree">Day 15 - Binary Tree</NavLink>
        </li>
        <li>
          <span>14 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day14_binary_tree">Day 14 - Binary Tree</NavLink>
        </li>
        <li>
          <span>13 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day13_bfs_binary_tree">
            Day 13 - Bfs Binary Tree
          </NavLink>
        </li>
        <li>
          <span>12 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day12_traversal_binary_tree">
            Day 12 - Traversal Binary Tree
          </NavLink>
        </li>
        <li>
          <span>11 FEB 2023 {">>"} </span>
          <NavLink to="/notes/ds-heap">Data Structure - Heap</NavLink>
        </li>
        <li>
          <span>11 FEB 2023 {">>"} </span>
          <NavLink to="/notes/ds-stack-queue">
            Data Structure - Stack & Queue
          </NavLink>
        </li>
        <li>
          <span>11 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day11_queue">Day 11 - Queue</NavLink>
        </li>
        <li>
          <span>10 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day10_stack">Day 10 - Stack</NavLink>
        </li>
        <li>
          <span>09 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day9_stack_queue">Day 9 - Stack Queue</NavLink>
        </li>
        <li>
          <span>08 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day8_kmp_string">Day 8 - Kmp String</NavLink>
        </li>
        <li>
          <span>07 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day7_string">Day 7 - String</NavLink>
        </li>
        <li>
          <span>06 FEB 2023 {">>"} </span>
          <NavLink to="/notes/ds-hashTable">
            Data Structure - Hash Table
          </NavLink>
        </li>
        <li>
          <span>06 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day6_hash_map">Day 6 - Hash Map</NavLink>
        </li>
        <li>
          <span>06 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day5_hash_array_set_map">
            Day 5 - Hash Array Set Map
          </NavLink>
        </li>
        <li>
          <span>04 FEB 2023 {">>"} </span>
          <NavLink to="/notes/ds-linkedList">
            Data Structure - Linked List
          </NavLink>
        </li>
        <li>
          <span>04 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day4_linked_list">Day 4 - Linked List</NavLink>
        </li>
        <li>
          <span>03 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day3_linked_list">Day 3 - Linked List</NavLink>
        </li>
        <li>
          <span>02 FEB 2023 {">>"} </span>
          <NavLink to="/notes/ds-array">Data Structure - Array</NavLink>
        </li>
        <li>
          <span>02 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day2_twoPointers_slidingWindow">
            Day 2 - Two pointers & Sliding window
          </NavLink>
        </li>
        <li>
          <span>01 FEB 2023 {">>"} </span>
          <NavLink to="/notes/Day1_binarySearch_twoPointers">
            Day 1 - Binary search & Two pointers
          </NavLink>
        </li>
      </ul>
      {/* <Outlet /> */}
    </section>
    <section id="Python">
      <h1>Python</h1>
      <ul>
        <li>
          <span>21 AUG 2023 {">>"} </span>
          <NavLink to="/notes/python-Max">max() Function</NavLink>
        </li>
      </ul>
    </section>
  </div>
);

export default Notes;
