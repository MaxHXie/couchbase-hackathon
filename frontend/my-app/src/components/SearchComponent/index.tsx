/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "./style.scss"
import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getStorage, setStorage } from "../../utils/storage"
import PrimaryButton from "../buttons/PrimaryButton"

type Props = {
  parentComponent: string
  onSubmit: Function
  searchHistoryStorageKey: string
  autoCompleteDictionary: string[]
  placeholder: string
  variant?: string
  cy?: string
  reset?: boolean
}

const SearchComponent = ({
  parentComponent,
  onSubmit,
  searchHistoryStorageKey,
  autoCompleteDictionary,
  placeholder,
  variant,
  cy,
  reset,
}: Props) => {
  const searchInputElement = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [hasTypedTextInSearchInput, setHasTypedTextInSearchInput] = useState(
    !!searchInputElement.current?.value ?? false
  )
  const searchAutoCompleteDiv = useRef<HTMLDivElement>(null)
  const enterButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const searchHistory = getStorage("localStorage", searchHistoryStorageKey)
    setSearchHistory(searchHistory ? searchHistory : [])
  }, [searchHistoryStorageKey])

  const clearAutocompleteDiv = () => {
    searchAutoCompleteDiv.current &&
      (searchAutoCompleteDiv.current.innerHTML = "")
  }

  const handleSearchInputOnSubmit = () => {
    if (searchInputElement.current!.value) {
      const searchString = searchInputElement.current!.value.trim()
      setSearchHistory((prev) => {
        if (!prev[0]) prev = [searchString]
        if (prev[0].toLowerCase() !== searchString.toLowerCase()) {
          prev.unshift(searchString)
        }
        setStorage("localStorage", searchHistoryStorageKey, prev, 259200000)
        return prev
      })
      clearAutocompleteDiv()
      onSubmit(searchString)
    } else {
      clearAutocompleteDiv()
      setHasTypedTextInSearchInput(false)
    }
  }

  const handleSearchInputOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchInputOnSubmit()
    } else if (e.key === "Escape") {
      // TODO: wouldn't it be better if on escape we only close the suggestion box instead of clearing everything?
      searchInputElement.current!.value = ""
      setHasTypedTextInSearchInput(false)
    } else {
      const autoCompleteDivChildren = searchAutoCompleteDiv.current?.children
      if (autoCompleteDivChildren && autoCompleteDivChildren.length > 0) {
        let highlightedChildIndex = Array.from(
          autoCompleteDivChildren
        ).findIndex((element) =>
          element.classList.contains("highlightedSuggestion")
        )
        if (e.key === "ArrowDown") {
          if (highlightedChildIndex < 0) {
            autoCompleteDivChildren[0].classList.add("highlightedSuggestion")
          } else if (
            highlightedChildIndex <
            autoCompleteDivChildren.length - 1
          ) {
            autoCompleteDivChildren[highlightedChildIndex].classList.remove(
              "highlightedSuggestion"
            )
            autoCompleteDivChildren[highlightedChildIndex + 1].classList.add(
              "highlightedSuggestion"
            )
          } else {
            autoCompleteDivChildren[highlightedChildIndex].classList.remove(
              "highlightedSuggestion"
            )
            autoCompleteDivChildren[0].classList.add("highlightedSuggestion")
          }
          searchInputElement.current!.value = (
            searchAutoCompleteDiv.current!.querySelector(
              ".highlightedSuggestion .suggestionText"
            )! as HTMLDivElement
          ).innerText
        } else if (e.key === "ArrowUp") {
          if (highlightedChildIndex < 0) {
            autoCompleteDivChildren[
              autoCompleteDivChildren.length - 1
            ].classList.add("highlightedSuggestion")
          } else if (highlightedChildIndex > 0) {
            autoCompleteDivChildren[highlightedChildIndex].classList.remove(
              "highlightedSuggestion"
            )
            autoCompleteDivChildren[highlightedChildIndex - 1].classList.add(
              "highlightedSuggestion"
            )
          } else {
            autoCompleteDivChildren[highlightedChildIndex].classList.remove(
              "highlightedSuggestion"
            )
            autoCompleteDivChildren[
              autoCompleteDivChildren.length - 1
            ].classList.add("highlightedSuggestion")
          }
          searchInputElement.current!.value = (
            searchAutoCompleteDiv.current!.querySelector(
              ".highlightedSuggestion .suggestionText"
            )! as HTMLDivElement
          ).innerText
        }
      }
    }
  }

  function handleSearchAutoCompleteOnClick(e: MouseEvent) {
    searchInputElement.current!.value = (
      (e.currentTarget! as HTMLElement).querySelector(
        ".suggestionText"
      )! as HTMLElement
    ).innerText
    if (searchInputElement.current!.value) {
      const searchString = searchInputElement.current!.value.trim()
      setSearchHistory((prev) => {
        if (!prev[0]) prev = [searchString]
        if (prev[0].toLowerCase() !== searchString.toLowerCase()) {
          prev.unshift(searchString)
        }
        setStorage("localStorage", searchHistoryStorageKey, prev, 259200000)
        return prev
      })
      onSubmit(searchString)
    }
  }

  const showSearchHistoryList = (
    clearAutocompleteDiv: () => void,
    searchHistory: string[],
    setHasTypedTextInSearchInput: React.Dispatch<React.SetStateAction<boolean>>,
    searchAutoCompleteDiv: React.RefObject<HTMLDivElement>,
    setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>,
    handleSearchAutoCompleteOnClick: (e: MouseEvent) => void
  ) => {
    clearAutocompleteDiv()
    if (searchHistory.length > 0) {
      setHasTypedTextInSearchInput(true)
      searchHistory.forEach((text) => {
        const wordDivInnerHTML = `
          <div class="suggestion">
            <span>
              &#9719;&ensp;
              <strong class="suggestionText">${text}</strong>
            </span>
            <div class="closeButton">
              &#215;
            </div>
          </div>`
        searchAutoCompleteDiv.current &&
          (searchAutoCompleteDiv.current.innerHTML += wordDivInnerHTML)
      })
      ;(
        Array.from(searchAutoCompleteDiv.current!.children) as HTMLElement[]
      ).forEach((suggestionDiv) => {
        let closeButton = suggestionDiv.querySelector(
          ".closeButton"
        )! as HTMLElement
        closeButton.addEventListener("pointerdown", (e: MouseEvent) => {
          e.stopPropagation()
          setSearchHistory((prev) => {
            const filteredValue = prev.filter(
              (item) =>
                item !==
                suggestionDiv.querySelector<HTMLElement>(".suggestionText")!
                  .innerText
            )
            setStorage(
              "localStorage",
              searchHistoryStorageKey,
              filteredValue,
              259200000
            )
            return filteredValue
          })
        })
        suggestionDiv.addEventListener(
          "pointerdown",
          handleSearchAutoCompleteOnClick
        )
      })
    } else {
      setHasTypedTextInSearchInput(false)
    }
  }

  const handleSearchInputOnChange = () => {
    if (searchInputElement.current!.value !== "") {
      setHasTypedTextInSearchInput(true)
      clearAutocompleteDiv()
      const searchString = searchInputElement.current!.value
      autoCompleteDictionary
        .filter(
          (word) =>
            word.toLowerCase().slice(0, searchString.length) ===
            searchString.toLowerCase()
        )
        .forEach((word) => {
          const wordDivInnerHTML = `<div class="suggestion">
              <span class="suggestionText">
                <strong>${word.slice(
                  0,
                  searchString.length
                )}</strong>${word.slice(searchString.length)}
              </span>
            </div>`
          searchAutoCompleteDiv.current &&
            (searchAutoCompleteDiv.current.innerHTML += wordDivInnerHTML)
        })
      ;(
        Array.from(searchAutoCompleteDiv.current!.children) as HTMLElement[]
      ).forEach((suggestionDiv) => {
        suggestionDiv.addEventListener(
          "pointerdown",
          handleSearchAutoCompleteOnClick
        )
      })
    } else {
      showSearchHistoryList(
        clearAutocompleteDiv,
        searchHistory,
        setHasTypedTextInSearchInput,
        searchAutoCompleteDiv,
        setSearchHistory,
        handleSearchAutoCompleteOnClick
      )
    }
  }

  const handleSearchInputOnClick = () => {
    showSearchHistoryList(
      clearAutocompleteDiv,
      searchHistory,
      setHasTypedTextInSearchInput,
      searchAutoCompleteDiv,
      setSearchHistory,
      handleSearchAutoCompleteOnClick
    )
  }

  const handleSearchInputOnBlur = () => {
    if (searchInputElement.current) {
      if (searchInputElement.current!.value === "") {
        setHasTypedTextInSearchInput(false)
      }
      clearAutocompleteDiv()
      if (parentComponent === "NavBar") {
        searchInputElement.current!.value = ""
        setHasTypedTextInSearchInput(false)
      }
    }
  }

  const handleSearchClearButtonOnClick = () => {
    searchInputElement.current!.value = ""
    if (parentComponent === "ProductList" && searchParams.get("s")) {
      searchParams.delete("s")
      setSearchParams(searchParams)
    }
    clearAutocompleteDiv()
    setHasTypedTextInSearchInput(false)
  }

  useEffect(() => {
    if (parentComponent === "ProductList" && searchParams.get("s")) {
      searchInputElement.current!.value = searchParams.get("s")!
    }
  }, [parentComponent, searchParams])

  useEffect(() => {
    if (reset) handleSearchClearButtonOnClick()
  }, [reset])

  return (
    <div
      className={`searchBar ${hasTypedTextInSearchInput ? "focused-box" : ""}`}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div
        className="searchBarContent"
        style={{
          paddingLeft:
            parentComponent === "NavBar" && !focused ? "unset" : "4px",
        }}
      >
        <div className="searchBarContentLeft">
          <img
            src="searchIcon"
            alt="searchIcon"
            className={`searchIcon inside${parentComponent} searchBarContentLeftIcon${
              hasTypedTextInSearchInput ? "Focused" : ""
            }`}
          />
          <input
            className={`searchInput inside${parentComponent}`}
            key={`in-${parentComponent}`}
            ref={searchInputElement}
            type="text"
            placeholder={!hasTypedTextInSearchInput ? placeholder : ""}
            onKeyDown={handleSearchInputOnKeyDown}
            onChange={handleSearchInputOnChange}
            onClick={handleSearchInputOnClick}
            onBlur={handleSearchInputOnBlur}
            data-cy={cy}
          />
        </div>
        <div style={{ display: "flex" }}>
          {hasTypedTextInSearchInput && (
            <div
              className={`searchBarContentRight${
                hasTypedTextInSearchInput ? "Focused" : ""
              }`}
            >
              <PrimaryButton
                ref={enterButtonRef}
                variant={`backgroundAccent smallImg square`}
                inlineStyles={{ height: "100%", width: "32px" }}
                onClick={handleSearchInputOnSubmit}
              >
                <img src={"/static/icons/arrow-right.svg"} alt="share" />
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
      <div
        className="searchAutoComplete"
        ref={searchAutoCompleteDiv}
        style={{
          display:
            hasTypedTextInSearchInput &&
            searchAutoCompleteDiv.current!.innerHTML !== ""
              ? "flex"
              : "none",
        }}
      ></div>
    </div>
  )
}

export default SearchComponent
